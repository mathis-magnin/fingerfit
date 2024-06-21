import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
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
  public newPicture?: string;
  public newName?: string;
  public newFirstName?: string;
  public newAge?: number;

  public editMode: boolean = false;

  public showPopup: boolean = false;
  public popupMsg: string = "Voulez-vous vraiment modifier ce profil ?";

  public errorMsg: string = "Remplissez tous les champs correctement";
  public warningVisible: boolean = false;

  public closePictures: boolean = false;

  public deleteButtonStyle: ButtonStyle = new ButtonStyle({ backgroundColor: '#ff0000' });
  public modifyButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh', margin: "1vw" });
  public cancelButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh', margin: "1vw", backgroundColor: "grey" });

  public constructor(public playerService: PlayerService, private router: Router, public changeDetector: ChangeDetectorRef) {
    playerService.player$.subscribe((player) => {
      this.profile = player;
    });

    this.newAge = this.profile?.age;
    this.newName = this.profile?.name;
    this.newFirstName = this.profile?.firstName;
    this.newPicture = this.profile?.profilePicture;
  }

  public modifyProfile(): void {
    if(!this.showPopup) {
      this.closePictures = this.editMode;
      if(this.editMode) {
        if (this.newName === '' || this.newFirstName === '' || !this.newAge || !this.newPicture) {
          this.errorMsg = "Remplissez tous les champs correctement";
          this.warningVisible = true;
        }
        else if (isNaN(this.newAge) || this.newAge <= 0) {
          this.errorMsg = "L'âge doit être un nombre supérieur à 0";
          this.warningVisible = true;
        }
        else {
          this.openConfirmModificationPopup();
        }
      }
      else {
        this.editMode = true;
      }
    }
  }

  public openConfirmModificationPopup(): void {
    if(!this.showPopup) {
      this.popupMsg = "Voulez-vous vraiment modifier ce profil ?"
      this.showPopup = true;
    }
  }

  public openConfirmDeletionPopup(): void {
    if(!this.showPopup) {
      this.popupMsg = "Voulez-vous vraiment supprimer ce profil ?"
      this.showPopup = true;
    }
  }

  public exitEditMode(): void {
    if(!this.showPopup) {
      this.closePictures = true;
      this.editMode = false;
      this.resetInput();
    }
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

  public confirm(): void {
    if(this.editMode) {
      this.updatePlayer();
      this.exitEditMode();
    }
    else {
      this.playerService.deleteProfile();
      this.router.navigate(['/profiles']);
    }
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