import { Component } from '@angular/core';
import { NavbarItem, navbarProfileOptionsStatistics } from 'src/models/navbar.model';
import { Position, Side, stringToSide } from 'src/models/position.model';
import { ListStyle } from 'src/models/style-input.model';
import { PositionsService } from 'src/services/positions.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent {
  public listStyle: ListStyle = { height: "75vh" };
  public positionList: Position[] = [];
  public side: Side = Side.UNDEFINED;
  public search: string = "";

  public currentPageIndex: number = 1;
  public navItems: NavbarItem[] = navbarProfileOptionsStatistics;
  public exitButtonLink: string = '/profiles';

  constructor(public positionsService: PositionsService) {
    this.positionsService.positions$.subscribe((positionList) => {
      this.positionList = positionList;
    })
  }


  ngOnInit(): void {
    this.positionsService.resetPositions();
  }


  public searchPositions(value: string) {
    this.positionsService.filterPositions(this.side, this.search = value);
  }


  public filterPositions(side: string) {
    this.positionsService.filterPositions(this.side = stringToSide(side), this.search);
  }

}