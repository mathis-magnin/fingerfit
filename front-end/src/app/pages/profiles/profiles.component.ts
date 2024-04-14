import { Component, Input } from '@angular/core';
import { ButtonStyle } from 'src/models/style-input.model';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})

export class ProfilesComponent {

  public profilToAdd: boolean = false;
  
  public addButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh' });

  constructor() {}

  ngOnInit(): void {}

}