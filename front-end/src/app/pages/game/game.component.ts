import { Component } from '@angular/core';
import { OptionsService } from '../../../services/options.service';
import { Options } from '../../../models/options.model';
import { PositionService } from '../../../services/position.service';
import { Key, Side, Position } from 'src/models/quiz.model';
import { Router } from '@angular/router';
import { StatsService } from 'src/services/stats.service';

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
  };

  private oneByOneMode: boolean = false; /* sera dans Options plus tard */

  public currentPositionNumber: number = 1;
  public numberOfPositions: number = 0;
  public showPopup: boolean = false;
  public position: Position = this.positionService.position$.value;
  public keysShown: Key[] = this.position.keys;
  public isCorrect: boolean = false;
  public stop: boolean = false;

  constructor(public optionsService: OptionsService, public positionService: PositionService, public statsService: StatsService, private router: Router) {
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
      }
    );
  }

  ngOnInit(): void {
    this.statsService.clearAnswers();

    if(this.oneByOneMode) {
      this.keysShown = [this.position.keys[0]];
    }
    else {
      this.keysShown = this.position.keys;
    }
  }

  public nextPosition(): void {
    if (this.showPopup) {
      return;
    }

    this.statsService.addAnswer({ time: this.positionService.TimerService.count, correct: this.isCorrect })
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

  private endGame(): void { //end the game here
    this.router.navigate(['/congrats']);
  }

  public isAnswerCorrect(correct: boolean): void {
    if (correct && !this.showPopup) {
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