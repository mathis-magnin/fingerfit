import { Component, Input } from '@angular/core';
import { NavbarItem, navbarProfileOptionsStatistics } from 'src/models/navbar.model';
import { ButtonStyle } from 'src/models/style-input.model';
import { PlayerService } from 'src/services/player.service';
import { Router } from '@angular/router';
import { ProfilesService } from 'src/services/profiles.service';
import { Profile } from 'src/models/profile.model';


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
  public buttonCancelStyle: ButtonStyle = new ButtonStyle({ backgroundColor: '#ff0000',  height: '5vh'});
  public buttonAcceptStyle: ButtonStyle = new ButtonStyle({ height: '5vh'});
  public popupVisible: boolean = false;
  public currentProfile?: Profile;
  public chronometer: boolean = false;


  constructor(private playerService: PlayerService, private router: Router, private profileService: ProfilesService) {
    this.playerService.player$.subscribe((player) => {
      this.currentProfile = player;
      if (player){
        this.chronometer = player.chronometer;
        this.timeWaitingValue = player.timePerQuestion;
      }
    });
  }
  

  public deleteUser(): void {
    this.playerService.deleteProfile();
    this.router.navigate(['/profiles']);
  }

  public showPopup(): void {
    this.popupVisible = !this.popupVisible;
  }

  public switchChronometer(event: any): void {
    if (!this.currentProfile) return;
    

    if (event.target.checked) {
      this.playerService.updateProfile({ ...this.currentProfile, chronometer: true });
      this.chronometer = true;
    }
    else {
      this.playerService.updateProfile({ ...this.currentProfile, chronometer: false });
      this.chronometer = false;
    }
  }

  public switchTimer(event: any): void {
    if (!this.currentProfile) return;

    if (event.target.checked) {
      this.playerService.updateProfile({ ...this.currentProfile, timePerQuestion: this.timeWaitingValue!=0?this.timeWaitingValue:20 });
      this.currentProfile.timePerQuestion = this.timeWaitingValue;
    }
    else {
      this.playerService.updateProfile({ ...this.currentProfile, timePerQuestion: 0 });
      this.currentProfile.timePerQuestion = 0;
    }

  }

  public setTime(time: string): void {
    this.timeWaitingValue = parseFloat(time);
    if(this.currentProfile && this.currentProfile?.timePerQuestion != 0)
    {
      this.currentProfile.timePerQuestion = this.timeWaitingValue;
      this.playerService.updateProfile(this.currentProfile);
    }
  }

}
