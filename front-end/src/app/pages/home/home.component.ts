import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public showPopup: boolean = false;
  public title: string = 'FingerFit';
  constructor() { }

  public togglePopup(exit: boolean): void {
    this.showPopup = !exit;
  }
}