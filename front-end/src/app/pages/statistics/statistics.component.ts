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
    public tempPositionList: Position[] = [];
    public positionList: Position[] = [];
    public allStatistics: Statistic[] = [];
    public statisticList: Statistic[] = [];
    public side: Side = Side.UNDEFINED;
    public search: string = "";
    public colorList = ["#74D0F1", "#FA8072", "#16B84E", "#F4C430", "#C9A0DC", "#FD6C9E", "#FEA347", "#7FFFD4", "#D2B48C", "#9FE855"]
    public colorMap: Map<any, string> = new Map<any, string>();

    public currentPageIndex: number = 1;
    public navItems: NavbarItem[] = navbarProfileOptionsStatistics;
    public exitButtonLink: string = '/profiles';

    constructor(public positionsService: PositionsService, public statisticsService: StatisticsService) {
        this.positionsService.positions$.subscribe((positions) => {
            this.tempPositionList = positions;
            this.positionToDisplay();
        });
        this.statisticsService.statistics$.subscribe((statisticList) => {
            this.statisticList = statisticList;
        });
        this.statisticsService.allStatistics$.subscribe((allStatistics) => {
            this.allStatistics = allStatistics;
            this.positionToDisplay();
        });
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
        console.log("statistics filtered : " + this.statisticList.length);
    }


    public sendColorMap(colorMap: Map<any, string>) {
        this.colorMap = colorMap;
    }


    public positionToDisplay() {
        this.positionList = [];
        for (let position of this.tempPositionList) {
            for (let statistic of this.allStatistics) {
                if (position.id === statistic.positionId) {
                    this.positionList.push(position);
                }
            }
        }
    }

}