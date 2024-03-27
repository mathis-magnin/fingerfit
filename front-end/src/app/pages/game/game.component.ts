import { Component } from '@angular/core';
import { QuizzesService } from '../../../services/quizzes.service';
import { Options } from '../../../models/options.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  public options: Options = {
    timePerQuestion: undefined,
    chronometer: false,
    hand: 'R',
    quiz: undefined
  };

  constructor(private quizzesService: QuizzesService) {
    this.quizzesService.options$.subscribe((options) => {
      this.options = options;
    });
  }

  public showEnd(): void {
    console.log('Game Over');
    //switch to another question or end the game here
  }


}