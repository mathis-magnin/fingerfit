import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {


  public isPopupVisible: boolean = false;
  public numberValue: number = 0;
  public isWarningVisible: boolean = false;

  constructor(private router: Router, private quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  public togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  public switchHand(hand: string): void {
    if (hand === 'L') {
      this.quizService.switchHand('L');
    }
    else {
      this.quizService.switchHand('R');
    }
  }

  public switchChronometer(event: any): void {
    if (event.target.checked) {
      this.quizService.setChronometer(true);
    }
    else {
      this.quizService.setChronometer(false);
    }
  }

  public setTime(time: string): void {
    const numberValue = parseFloat(time);
    if (this.quizService.getTimer() != 0 && numberValue > 0) {
      this.quizService.setTime(numberValue);
    }
  }

  public switchTimer(event: any): void {
    if(event.target.checked) {
      this.quizService.setTimer(true);
    }
    else {
      this.quizService.setTimer(false);
    }
  }

  public getTimer(): number {
    return this.quizService.getTimer();
  }

  public getHand(): string {
    return this.quizService.getHand();
  }

  public switchGame(): void {
    if (this.quizService.checkOptions()) {
      this.router.navigateByUrl('/game');
    }
    else {
      this.isWarningVisible = true;
    }
  }

}