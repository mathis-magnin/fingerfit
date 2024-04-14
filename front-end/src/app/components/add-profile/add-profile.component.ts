import { Component, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/models/profile.model';
import { ProfilesService } from '../../../services/profiles.service';

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
  
  
export class AddProfileComponent {

  public profile: Profile = {
    name: '',
    firstName: '',
    age: 0,
    profilePicture: '',
  }

  @Output()
  exit:EventEmitter<void> = new EventEmitter<void>();
    

  public warningVisible: boolean = false;

  constructor(private profileService:ProfilesService) { }
  
  ngOnInit(): void {
  }

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
    if (this.profile.name !== '' && this.profile.firstName !== '' && this.profile.age !== 0 && this.profile.profilePicture !== '') {
      this.profileService.addProfile(this.profile);
      this.exit.emit(); 
    }
    else {
      this.warningVisible = true;
    }
  }
}