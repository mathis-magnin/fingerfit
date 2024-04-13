import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from 'src/services/options.service';
import { Options } from 'src/models/options.model';
import { Quiz } from 'src/models/quiz.model';
import { ButtonStyle } from 'src/models/style-input.model';

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
  public showPopup: boolean = false;
  public timeWaitingValue: number = 20;
  public currentError: string = '';

  @Input() public selectButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh' });
  @Input() public playButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '10vh' });

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
    this.timeWaitingValue = parseFloat(time);
    if (this.options?.timePerQuestion && this.timeWaitingValue > 0) {
      this.optionsService.setTime(this.timeWaitingValue);
    }
  }

  public switchTimer(event: any): void {
    if (event.target.checked) {
      this.optionsService.setTimer(true);
      this.optionsService.setTime(this.timeWaitingValue);
    }
    else {
      this.optionsService.setTimer(false);
    }
  }

  public switchGame(): void {
    if (this.optionsService.checkOptions() && (this.timeWaitingValue > 0 || this.options?.timePerQuestion===undefined)) {
      this.router.navigateByUrl('/game');
    }
    else if (this.timeWaitingValue <= 0) {
      this.currentError = 'Veuillez entrer un nombre positif pour le temps de réponse';
      this.isWarningVisible = true;
    }
    else {
      this.currentError = 'Veuillez sélectionner un quiz';
      this.isWarningVisible = true;
    }
  }

  public selectQuiz(quiz: Quiz): void {
    this.optionsService.selectQuiz(quiz);
    this.optionsService.setHand(quiz.side);
  }

  public togglePopupLogin(exit: boolean): void {
    this.showPopup = !exit;
  }
}