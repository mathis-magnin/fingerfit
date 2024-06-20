import { Component } from '@angular/core';
import { OptionsService } from '../../../services/options.service';
import { Options, GameMode, TimeMesure } from '../../../models/options.model';
import { PositionService } from '../../../services/position.service';
import { Position } from '../../../models/position.model';
import { Key } from '../../../models/key.model';
import { Router } from '@angular/router';
import { AnswersService } from 'src/services/answers.service';
import { StatisticService } from 'src/services/statistic.service';
import { ButtonStyle, HandsStyle, KeyboardStyle } from 'src/models/style-input.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  TimeMesure = TimeMesure;
  public options: Options = {
    quiz: undefined,
    gameMode: GameMode.ALL_AT_ONCE,
    timeMesure: TimeMesure.NONE,
    countdown: 20
  };

  public handsStyle: HandsStyle = { width: '30vh', height: '30vh' };
  public keyboardStyle: KeyboardStyle = new KeyboardStyle(2.5);
  public breakPopupButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh', margin: "1vw" });

  public currentPositionNumber: number = 1;
  public numberOfPositions: number = 0;
  public showPopup: boolean = false;
  public showPopupBreak: boolean = false;
  public position: Position = this.positionService.position$.value;
  public keysShown: Key[] = this.position.keys;
  public currentKeyIndex: number = 0;
  public isCorrect: boolean = false;
  public stop: boolean = false;

  constructor(public optionsService: OptionsService, public positionService: PositionService, public answersService: AnswersService, private router: Router, private statisticService: StatisticService) {
    this.optionsService.options$.subscribe((options) => {
      this.options = options;
    });

    this.positionService.numberOfPositions$.subscribe(
      (numberOfPositions) => {
        this.numberOfPositions = numberOfPositions;
      }
    )

    this.positionService.currentPositionIndex$.subscribe(
      (currentPositionIndex) => {
        this.currentPositionNumber = currentPositionIndex + 1;
      }
    )

    this.positionService.position$.subscribe(
      (position) => {
        this.position = position;
        switch (this.options.gameMode) {
          case GameMode.ONE_BY_ONE:
            this.currentKeyIndex = 0;
            this.keysShown = [this.position.keys[this.currentKeyIndex]];
            break;
          default /* case GameMode.ALL_AT_ONCE */:
            this.keysShown = this.position.keys;
            break;
        }
      }
    );
  }

  ngOnInit(): void {
    this.answersService.clearAnswers();
    this.statisticService.fetchStat();
  }

  public nextPosition(): void {
    if (this.showPopup) {
      return;
    }

    if (this.options.gameMode === GameMode.ONE_BY_ONE && this.currentKeyIndex < (this.position.keys.length - 1)) {
      console.log('One by one mode: next key');
      this.currentKeyIndex++;
      this.keysShown = [this.position.keys[this.currentKeyIndex]];
      console.log('keysShown: ', this.keysShown);
    }
    else {
      this.answersService.addAnswer({ time: this.positionService.TimerService.count, correct: this.isCorrect });
      console.log(this.statisticService.statisticUrl);
      this.statisticService.updateStat({ time: this.positionService.TimerService.count, correct: this.isCorrect });
      if (!this.positionService.nextPosition()) {
        this.endGame();
      }
      else {
        this.stop = true;
        if (this.isCorrect && (this.currentPositionNumber - 1 === Math.floor(this.numberOfPositions / 2))) {
          console.log('animate');
          this.animate().then(() => {
            console.log('animate end');
            this.isCorrect = false;
            this.positionService.positionStart(true);
            this.stop = false;
          });
        }
        else {
          console.log('Fonction nextPosition: pas super-hand');
          this.isCorrect = false;
          new Promise<void>((resolve) => {
            setTimeout(() => { resolve(); }, 1);
          }).then(() => {
            this.positionService.positionStart(true);
            this.stop = false;
          }); /* Cette promise a uniquement pour but de faire recommencer l'animation du timer */
        }
      }
    }
  }

  private endGame(): void { //end the game here
    this.router.navigate(['/congrats']);
  }

  public isAnswerCorrect(correct: boolean): void {
    if (correct && !this.showPopup && !(this.options.gameMode === GameMode.ONE_BY_ONE && this.currentKeyIndex < (this.position.keys.length - 1))) {
      this.isCorrect = true;
    }
  }

  animate(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  public togglePopup(exit: boolean): void {
    this.showPopup = !exit;
    if (exit) {
      this.positionService.positionStart();
    }
    else {
      this.positionService.positionStop();
    }
  }

  public takeBreak(): void {
    this.positionService.positionStop();
    this.showPopupBreak = true;
  }

  public endBreak(): void {
    this.showPopupBreak = false;
    this.positionService.positionStart();
  }

}