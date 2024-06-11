import { Component } from '@angular/core';
import { NavbarItem, navbarProfileOptionsStatistics } from 'src/models/navbar.model';
import { Position, Side, stringToSide } from 'src/models/position.model';
import { Statistic } from 'src/models/statistic.model';
import { ListStyle } from 'src/models/style-input.model';
import { PositionsService } from 'src/services/positions.service';
import { StatisticsService } from 'src/services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent {
  public listStyle: ListStyle = { height: "75vh" };
  public positionList: Position[] = [];
  public statisticList: Statistic[] = [];
  public side: Side = Side.UNDEFINED;
  public search: string = "";

  public currentPageIndex: number = 1;
  public navItems: NavbarItem[] = navbarProfileOptionsStatistics;
  public exitButtonLink: string = '/profiles';

  constructor(public positionsService: PositionsService, public statisticsService: StatisticsService) {
    this.positionsService.positions$.subscribe((positionList) => {
      this.positionList = positionList;
    })
    this.statisticsService.statistics$.subscribe((statisticList) => {
      this.statisticList = statisticList;
    })
  }


  ngOnInit(): void {
    this.positionsService.resetPositions();
    this.filterStatistics([]);
  }


  public searchPositions(value: string) {
    this.positionsService.filterPositions(this.side, this.search = value);
  }


  public filterPositions(side: string) {
    this.positionsService.filterPositions(this.side = stringToSide(side), this.search);
  }

  public filterStatistics(positions: Position[]) {
    this.statisticsService.filterStatistics(positions);
    console.log("statistics filterd : " + this.statisticList.length);
  }

}