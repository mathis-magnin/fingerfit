import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Profile } from 'src/models/profile.model';
import { ButtonStyle } from 'src/models/style-input.model';
import { PlayerService } from 'src/services/player.service';

@Component({
  selector: 'app-profil-info',
  templateUrl: './profil-info.component.html',
  styleUrls: ['./profil-info.component.scss']
})


export class InfoProfileComponent {

  @Input() profile: Profile | undefined;
  public editMode: boolean = false;
  public editText: string = "Modifier";

  public newPicture?: string;
  public newName?: string;
  public newFirstName?: string;
  public newAge?: number;

  public showPopup: boolean = false;
  public errorMsg: string = "Remplissez tous les champs correctement";
  public warningVisible: boolean = false;
  public closePictures: boolean = false;
  public addButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh', margin: "1vw" });

  public constructor(public playerService: PlayerService, public changeDetector: ChangeDetectorRef) {
    playerService.player$.subscribe((player) => {
      this.profile = player;
    });

    this.newAge = this.profile?.age;
    this.newName = this.profile?.name;
    this.newFirstName = this.profile?.firstName;
    this.newPicture = this.profile?.profilePicture;
  }

  public triggerPopup(): void {
    this.closePictures = false;
    if (this.newName === '' || this.newFirstName === '' || !this.newAge || !this.newPicture) {
      this.closePictures = true;
      this.errorMsg = "Remplissez tous les champs correctement";
      this.warningVisible = true;
      return;
    }
    if (isNaN(this.newAge) || this.newAge <= 0) {
      this.closePictures = true;
      this.errorMsg = "L'âge doit être un nombre supérieur à 0";
      this.warningVisible = true;
      return;
    }
    if (this.editMode) {
      this.closePictures = true;
      this.showPopup = true;
    }
    else {
      this.editMode = true;
      this.editText = "Valider"
    }
  }

  public exitEditMode(): void {
    this.closePictures = true;
    this.editMode = false;
    this.editText = "Modifier";
    this.resetInput();
  }

  setProfilePicture(event: any): void {
    this.newPicture = event;
  }

  setName(event: any): void {
    this.newName = event;
  }

  setFirstName(event: any): void {
    this.newFirstName = event;
  }

  setAge(event: any): void {
    this.newAge = event;
  }

  public confirmEdit(): void {
    this.updatePlayer();
    this.exitEditMode();
  }

  public updatePlayer(): void {
    this.showPopup = false;
    if (this.profile) {
      this.profile.age = this.newAge || this.profile.age;
      this.profile.name = this.newName || this.profile.name;
      this.profile.firstName = this.newFirstName || this.profile.firstName;
      this.profile.profilePicture = this.newPicture || this.profile.profilePicture;
      this.playerService.updateProfile(this.profile);
    }
  }

  resetInput(): void {
    this.newAge = this.profile?.age;
    this.newName = this.profile?.name;
    this.newFirstName = this.profile?.firstName;
    this.newPicture = this.profile?.profilePicture;
  }


}