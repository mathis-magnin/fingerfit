import { Component } from '@angular/core';
import { OptionsService } from '../../../services/options.service';
import { Options } from '../../../models/options.model';
import { PositionService } from '../../../services/position.service';
import { Key } from 'src/models/quiz.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  public options: Options = {
    timePerQuestion: undefined,
    chronometer: false,
    quiz: undefined
  };

  public keysToPress: Key[] = this.positionService.position$.value.keys;

  constructor(public optionsService: OptionsService, public positionService: PositionService, private router: Router) {
    this.optionsService.options$.subscribe((options) => {
      this.options = options;
    });

    this.positionService.position$.subscribe((position) => {
      this.keysToPress = position.keys;
    });
  }

  ngOnInit(): void {
    console.log(this.options.timePerQuestion);
    console.log(this.options.chronometer);
    console.log(this.options.quiz?.name);
    console.log(this.keysToPress);
  }

  public nextPosition(): void { //switch to another question or end the game here
    console.log('Position Finished');
    if (!this.positionService.nextPosition()) {
      this.endGame();
    }
  }

  private endGame(): void { //end the game here
    console.log('Game Over');
    this.router.navigate(['/congrats']);
  }
}