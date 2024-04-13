import { Component, Input } from '@angular/core';
import { profilesService } from 'src/services/profiles.service';
import { ButtonStyle } from 'src/models/style-input.model';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})

export class ProfilesComponent {

  @Input() public addButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh' });

  constructor() {}

  ngOnInit(): void {
  }

}