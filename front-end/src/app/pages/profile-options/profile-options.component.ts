import { Component, Input } from '@angular/core';
import { NavbarItem, navbarProfileOptionsStatistics } from 'src/models/navbar.model';
import { PlayerService } from 'src/services/player.service';
import { ProfilesService } from 'src/services/profiles.service';
import { Profile } from 'src/models/profile.model';
import { GameMode, TimeMesure, gameModeToString, timeMesureToString } from 'src/models/options.model';
import { ButtonStyle } from 'src/models/style-input.model';


@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.scss']
})

export class ProfileOptionsComponent {

  public currentPageIndex: number = 0;
  public navItems: NavbarItem[] = navbarProfileOptionsStatistics;
  public exitButtonLink: string = '/profiles';

  public timeWaitingValue: number = 20;

  public buttonStyle: ButtonStyle = new ButtonStyle({ backgroundColor: '#ff0000' });
  public buttonCancelStyle: ButtonStyle = new ButtonStyle({ backgroundColor: '#ff0000', height: '5vh' });
  public buttonAcceptStyle: ButtonStyle = new ButtonStyle({ height: '5vh' });
  public popupVisible: boolean = false;
  public chronometer: boolean = false;


  public user: Profile = {
    id: 0,
    name: '',
    firstName: '',
    age: 0,
    profilePicture: '',
    gameMode: GameMode.ALL_AT_ONCE,
    timeMesure: TimeMesure.NONE,
    countdown: 20
  };

  GameMode = GameMode;
  gameModeToString = gameModeToString;
  public gameModes: GameMode[] = [];

  TimeMesure = TimeMesure;
  timeMesureToString = timeMesureToString;
  public timeMesures: TimeMesure[] = [];


  constructor(private playerService: PlayerService, private profileService: ProfilesService) {
    this.playerService.player$.subscribe((player) => {
      if (player) {
        this.user = player;
      }
    });

    for (let gameMode = GameMode.ALL_AT_ONCE; gameMode <= GameMode.ONE_BY_ONE; gameMode++) {
      this.gameModes.push(gameMode);
    }

    for (let timeMesure = TimeMesure.NONE; timeMesure <= TimeMesure.COUNTDOWN; timeMesure++) {
      this.timeMesures.push(timeMesure);
    }
  }


  public updateUser() {
    console.log(this.user);
    this.playerService.updateProfile(this.user);
  }
    

  /* Game mode */

  public setGameMode(gameMode: GameMode): void {
    this.user.gameMode = gameMode;
    console.log(this.user);
    this.updateUser();
  }


  /* Time mesure */

  public setTimeMesure(timeMesure: TimeMesure): void {
    this.user.timeMesure = timeMesure;
    this.updateUser();
  }


  public setCountdown(countdown: number | undefined): void {
    if (countdown && (0 < countdown)) {
      this.user.countdown = countdown;
      this.updateUser();
    }
  }

}
