import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OptionsService } from 'src/services/options.service';
import { Options, GameMode, gameModeToString, stringToGameMode, TimeMesure, stringToTimeMesure, timeMesureToString } from 'src/models/options.model';
import { BoxStyle, ButtonStyle } from 'src/models/style-input.model';
import { NavbarItem } from 'src/models/navbar.model';
import { Side, stringToSide } from 'src/models/position.model';
import { Quiz } from 'src/models/quiz.model';
import { QuizzesService } from 'src/services/quizzes.service';
import { PlayerService } from 'src/services/player.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

  /* Navigation bar and popup */

  public currentPageIndex: number = 0;
  public navItems: NavbarItem[] = [{ name: 'Paramétrage de la partie', url: '/options' }];
  public exitButtonLink: string = '/profiles';

  public showPopup: boolean = false;


  /* List */

  public quizList: Quiz[] = [];
  public side: Side = Side.UNDEFINED;
  public search: string = '';
  public selectedQuiz?: Quiz;


  /* Button style */

  public boxStyle: BoxStyle = new BoxStyle({});
  public playButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh' });


  /* Options */

  GameMode = GameMode;
  gameModeToString = gameModeToString;
  public gameModes: GameMode[] = [];

  TimeMesure = TimeMesure;
  timeMesureToString = timeMesureToString;
  public timeMesures: TimeMesure[] = [];

  public options: Options = {
    quiz: undefined,
    gameMode: GameMode.ALL_AT_ONCE,
    timeMesure: TimeMesure.NONE,
    countdown: 20
  };

  public countdownUnset: boolean = false;
  public warning: string = "";



  constructor(private router: Router, public optionsService: OptionsService, public quizzesService: QuizzesService, public playerService: PlayerService) {
    optionsService.clearOptions();

    this.quizzesService.quizzes$.subscribe((quizList) => {
      this.quizList = quizList;
    })


    this.playerService.player$.subscribe((player) => {
      if (player) {
        this.options.gameMode = player.gameMode;
        this.options.timeMesure = player.timeMesure;
        this.options.countdown = player.countdown;
      }
    });

    for (let gameMode = GameMode.ALL_AT_ONCE; gameMode <= GameMode.ONE_BY_ONE; gameMode++) {
      this.gameModes.push(gameMode);
    }

    for (let timeMesure = TimeMesure.NONE; timeMesure <= TimeMesure.COUNTDOWN; timeMesure++) {
      this.timeMesures.push(timeMesure);
    }
  }


  public togglePopupLogin(exit: boolean): void {
    this.showPopup = !exit;
  }


  /* Quiz */

  public searchQuizzes(value: string): void {
    this.quizzesService.filterQuizzes(this.side, this.search = value);
  }


  public filterQuizzes(side: string): void {
    this.quizzesService.filterQuizzes(this.side = stringToSide(side), this.search)
  }


  public setQuiz(quiz: Quiz) {
    this.options.quiz = quiz;
  }


  /* Game mode */

  public setGameMode(gameMode: GameMode): void {
    this.options.gameMode = gameMode;
  }


  /* Time mesure */

  public setTimeMesure(timeMesure: TimeMesure): void {
    this.options.timeMesure = timeMesure;
  }


  public setCountdown(countdown: number | undefined): void {
    if (countdown) {
      this.options.countdown = countdown;
    }
    else {
      this.countdownUnset = true;
    }
  }


  /* Validate and play */

  public play() {
    this.warning = (this.options.quiz == undefined) ? "Veuillez sélectionner un quiz" : ((this.options.timeMesure == TimeMesure.COUNTDOWN) && ((this.countdownUnset) || (this.options.countdown < 0)) ? "Veuillez entrer un nombre strictement positif pour le compte à rebours" : "");
    if (this.warning == "") {
      this.optionsService.setOptions(this.options);
      this.router.navigateByUrl("/game");
    }
  }

}