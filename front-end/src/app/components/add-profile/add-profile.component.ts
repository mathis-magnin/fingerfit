import { Component, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/models/profile.model';
import { ProfilesService } from '../../../services/profiles.service';
import { ButtonStyle } from 'src/models/style-input.model';
import { GameMode, TimeMesure } from 'src/models/options.model';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})


export class AddProfileComponent {

  public profile: Profile = {
    id: 0,
    name: '',
    firstName: '',
    age: 0,
    profilePicture: '',
    gameMode: GameMode.ALL_AT_ONCE,
    timeMesure: TimeMesure.NONE,
    countdown: 20
  }
  public warningVisible: boolean = false;
  public errorMsg:string  = "Remplissez tous les champs correctement";
  public addButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh',margin:"1vw"});

  @Output() exit:EventEmitter<void> = new EventEmitter<void>();

  constructor(private profileService:ProfilesService) { }
  
  ngOnInit(): void { }

  public setProfilePicture(event: any): void {
    this.profile.profilePicture = event;
  }

  public setName(event: any): void {
    this.profile.name = event;
  }

  public setFirstName(event: any): void {
    this.profile.firstName = event;
  }

  public setAge(event: any): void {
    this.profile.age = event;
  }


  public checkAndApply(): void {
    if (this.profile.name !== '' && this.profile.firstName !== '' && !isNaN(this.profile.age) && this.profile.age > 0 && this.profile.profilePicture !== '') {
      this.profileService.addProfile(this.profile);
      this.exit.emit();
    }
    else if (isNaN(this.profile.age) || this.profile.age <= 0) {
      this.errorMsg = "L'âge doit être un nombre supérieur à 0.";
      this.warningVisible = true;
    }
    else {
      this.errorMsg = "Remplissez tous les champs.";
      this.warningVisible = true;
    }
  }

}