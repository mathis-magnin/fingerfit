import { Component, Input } from '@angular/core';
import { NavbarItem, navbarProfileOptionsStatistics } from 'src/models/navbar.model';
import { ButtonStyle } from 'src/models/style-input.model';
import { PlayerService } from 'src/services/player.service';
import { Router } from '@angular/router';
import { ProfilesService } from 'src/services/profiles.service';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.scss']
})
  
export class ProfileOptionsComponent {

  public currentPageIndex: number = 0;

  public navItems: NavbarItem[] = navbarProfileOptionsStatistics;

  public exitButtonLink: string = '/profiles';

  public buttonStyle: ButtonStyle = new ButtonStyle({ backgroundColor: '#ff0000' });
  public buttonCancelStyle: ButtonStyle = new ButtonStyle({ backgroundColor: '#ff0000',  height: '5vh'});
  public buttonAcceptStyle: ButtonStyle = new ButtonStyle({ height: '5vh'});
  public popupVisible: boolean = false;

  constructor(private playerService: PlayerService, private router: Router, private profileService: ProfilesService) { }
  

  public deleteUser(): void {
    this.playerService.deleteProfile(() =>
    {
      this.profileService.fetchProfiles();
      this.router.navigate(['/profiles']);
    });
  }

  public showPopup(): void {
    this.popupVisible = !this.popupVisible;
  }
}
