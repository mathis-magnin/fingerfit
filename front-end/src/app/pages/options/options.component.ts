import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzesService } from '../../../services/quizzes.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {


  public isPopupVisible: boolean = false;
  public numberValue: number = 0;
  public isWarningVisible: boolean = false;

  constructor(private router: Router, private quizzesService: QuizzesService) {
  }

  ngOnInit(): void {
  }

  public togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  public switchHand(hand: string): void {
    if (hand === 'L') {
      this.quizzesService.switchHand('L');
    }
    else {
      this.quizzesService.switchHand('R');
    }
  }

  public switchChronometer(): void {
    this.quizzesService.switchChronometer();
  }

  public setTimer(time: string): void {
    const numberValue = parseFloat(time);
    if (this.quizzesService.getTimer() != 0 && numberValue > 0) {
      this.quizzesService.setTimer(numberValue);
    }
  }

  public switchTimer(): void {
    this.quizzesService.switchTimer();
  }

  public getTimer(): number {
    return this.quizzesService.getTimer();
  }

  public getHand(): string {
    return this.quizzesService.getHand();
  }

  public switchGame(): void {
    if (this.quizzesService.checkOptions()) {
      this.router.navigateByUrl('/game');
    }
    else {
      this.isWarningVisible = true;
    }
  }

}