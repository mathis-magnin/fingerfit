import { Component, Input } from '@angular/core';
import { ButtonStyle } from 'src/models/style-input.model';
import { NavbarItem } from 'src/models/navbar.model';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})

export class ProfilesComponent {

  public currentPageIndex: number = 0;
  public navItems: NavbarItem[] = [{ name: 'Profils', url: '/profiles' }, { name: 'Quiz', url: '/quizzes' }, { name: 'Positions', url: '/positions' }];
  public exitButtonLink: string = '/home';

  public profilToAdd: boolean = false;

  public addButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh' });

  constructor() { }

  ngOnInit(): void { }

}