import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  public a: string = "A"; // temporary this line should be in keyboard component
  public z: string = "Z"; // temporary this line should be in keyboard component

  constructor() { }
}