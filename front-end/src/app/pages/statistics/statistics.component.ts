import { Component } from '@angular/core';
import { NavbarItem, navbarProfileOptionsStatistics } from 'src/models/navbar.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent {

  public currentPageIndex: number = 1;

  public navItems: NavbarItem[] = navbarProfileOptionsStatistics;

  public exitButtonLink: string = '/profiles';

  constructor() { }

}