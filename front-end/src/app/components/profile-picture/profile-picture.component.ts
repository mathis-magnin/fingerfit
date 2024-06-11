import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
  
  
export class profilePictureComponent {
  @Input() imgURL?: string;
  @Output() imgClicked = new EventEmitter<string>();

  constructor() { }

  public onImgClick(): void {
    this.imgClicked.emit(this.imgURL);
  }
    
}