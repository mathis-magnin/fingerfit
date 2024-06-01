import { Component } from '@angular/core';
import { OptionsService } from '../../../services/options.service';
import { Options, GameMode } from '../../../models/options.model';
import { PositionService } from '../../../services/position.service';
import { Position } from '../../../models/position.model';
import { Key } from '../../../models/key.model';
import { Router } from '@angular/router';
import { AnswersService } from 'src/services/answers.service';
import { HandStyle } from 'src/models/style-input.model';
import { StatisticService } from 'src/services/statistic.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  public options: Options = {
    timePerQuestion: undefined,
    chronometer: false,
    quiz: undefined,
    gameMode: GameMode.ALL_AT_ONCE,
  };

  public handStyle: HandStyle = { width: '25vh', height: '25vh' };

  public currentPositionNumber: number = 1;
  public numberOfPositions: number = 0;
  public showPopup: boolean = false;
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
    this.statisticService.fetchStat(999);
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
      //this.statisticService.getStat(this.position.id).updateStat({ time: this.positionService.TimerService.count, correct: this.isCorrect});
      this.statisticService.updateStat({ time: this.positionService.TimerService.count, correct: this.isCorrect});
      if (!this.positionService.nextPosition()) {
        this.endGame();
      }
      else {
        if (this.isCorrect) {
          this.stop = true;
          console.log('animate');
          this.animate().then(() => {
            console.log('animate end');
            this.isCorrect = false;
            this.positionService.positionStart(true);
            this.stop = false;
          });
        }
        else {
          this.positionService.positionStart(true);
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

  public endNear(event: boolean): void {
    if (event && this.options.timePerQuestion) {
      console.log('end near');
    }
  }
}