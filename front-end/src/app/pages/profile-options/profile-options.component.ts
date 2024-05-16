import { Component, Input } from '@angular/core';
import { NavbarItem, navbarProfileOptionsStatistics } from 'src/models/navbar.model';

@Component({
  selector: 'app-profile-options',
  templateUrl: './profile-options.component.html',
  styleUrls: ['./profile-options.component.scss']
})
export class ProfileOptionsComponent {

  public currentPageIndex: number = 0;

  public navItems: NavbarItem[] = navbarProfileOptionsStatistics;

  public exitButtonLink: string = '/profiles';

}