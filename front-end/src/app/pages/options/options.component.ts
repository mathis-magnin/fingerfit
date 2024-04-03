import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from 'src/services/options.service';
import { Options } from 'src/models/options.model';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

  public options: Options | undefined;
  public isPopupVisible: boolean = false;
  public numberValue: number = 0;
  public isWarningVisible: boolean = false;

  constructor(private router: Router, public optionsService: OptionsService) {
    this.optionsService.options$.subscribe((options) => {
      this.options = options;
    });
  }

  ngOnInit(): void {
    this.optionsService.clearOptions();
  }

  public togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }


  public switchChronometer(event: any): void {
    if (event.target.checked) {
      this.optionsService.setChronometer(true);
    }
    else {
      this.optionsService.setChronometer(false);
    }
  }

  public setTime(time: string): void {
    const numberValue = parseFloat(time);
    if (this.options?.timePerQuestion != 0 && numberValue > 0) {
      this.optionsService.setTime(numberValue);
    }
  }

  public switchTimer(event: any): void {
    if (event.target.checked) {
      this.optionsService.setTimer(true);
    }
    else {
      this.optionsService.setTimer(false);
    }
  }

  public switchGame(): void {
    if (this.optionsService.checkOptions()) {
      this.router.navigateByUrl('/game');
    }
    else {
      this.isWarningVisible = true;
    }
  }

  public selectQuiz(quiz: Quiz): void {
    this.optionsService.selectQuiz(quiz);
    this.optionsService.setHand(quiz.side);
  }
}