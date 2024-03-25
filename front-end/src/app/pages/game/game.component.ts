import { Component } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
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

  constructor(private quizService: QuizService) {
    this.quizService.options$.subscribe((options) => {
      this.options = options;
    });
  }
  

  public showEnd(): void {
    console.log('Game Over');
    //switch to another question or end the game here
  }

  public clearOptions() {
    this.quizService.clearOptions();
  }

}