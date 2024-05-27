import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from 'src/services/options.service';
import { Options, GameMode, gameModeToString, stringToGameMode } from 'src/models/options.model';
import { BoxStyle, ButtonStyle } from 'src/models/style-input.model';
import { NavbarItem } from 'src/models/navbar.model';
import { Side, stringToSide } from 'src/models/position.model';
import { Quiz } from 'src/models/quiz.model';
import { QuizzesService } from 'src/services/quizzes.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

  public currentPageIndex: number = 0;
  public navItems: NavbarItem[] = [{ name: 'Paramétrage de la partie', url: '/options' }];
  public exitButtonLink: string = '/profiles';

  public options: Options | undefined;
  public isPopupVisible: boolean = false;
  public numberValue: number = 0;
  public isWarningVisible: boolean = false;
  public showPopup: boolean = false;
  public timeWaitingValue: number = 20;
  public currentError: string = '';
  public gameModes: string[] = [];

  public quizList: Quiz[] = [];
  public side: Side = Side.UNDEFINED;
  public search: string = '';

  public boxStyle: BoxStyle = new BoxStyle({});
  public playButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '10vh' });

  constructor(private router: Router, public optionsService: OptionsService, public quizzesService: QuizzesService) {
    this.optionsService.options$.subscribe((options) => {
      this.options = options;
    });

    this.quizzesService.quizzes$.subscribe((quizList) => {
      this.quizList = quizList;
    })

    for (let gameMode = GameMode.ALL_AT_ONCE; gameMode <= GameMode.ONE_BY_ONE; gameMode++) {
      this.gameModes.push(gameModeToString(gameMode));
    }
  }


  ngOnInit(): void {
    this.optionsService.clearOptions();
    this.quizzesService.resetQuizzes();
  }


  searchQuizzes(value: string) {
    this.quizzesService.filterQuizzes(this.side, this.search = value);
  }


  filterQuizzes(side: string) {
    this.quizzesService.filterQuizzes(this.side = stringToSide(side), this.search)
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

  public setGameMode(gameMode: string): void {
    this.optionsService.setGameMode(stringToGameMode(gameMode));
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
    if (this.optionsService.checkOptions() && (this.timeWaitingValue > 0 || this.options?.timePerQuestion === undefined)) {
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
  }

  public togglePopupLogin(exit: boolean): void {
    this.showPopup = !exit;
  }
}