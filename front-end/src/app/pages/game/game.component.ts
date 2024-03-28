import { Component } from '@angular/core';
import { OptionsService } from '../../../services/options.service';
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

  constructor(public optionsService: OptionsService) {
    this.optionsService.options$.subscribe((options) => {
      this.options = options;
    });
  }

  ngOnInit(): void {
    console.log(this.options.timePerQuestion);
    console.log(this.options.chronometer);
    console.log(this.options.hand);
    console.log(this.options.quiz?.name);
  }

  public showEnd(): void {
    console.log('Game Over');
    //switch to another question or end the game here
  }

  public clearOptions() {
    this.optionsService.clearOptions();
  }

}