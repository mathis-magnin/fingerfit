import { Component } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})

export class ProfilesComponent {

  public profilToAdd: boolean = false;
  
  constructor() { }
  ngOnInit(): void {
  }

}