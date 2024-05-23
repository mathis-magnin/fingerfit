import { Component } from '@angular/core';
import { Position, Side, sideToString, stringToSide } from 'src/models/quiz.model';
import { QuizListStyle } from 'src/models/style-input.model';
import { PositionsService } from 'src/services/positions.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent {

  public listStyle: QuizListStyle = { height: "75vh" };
  public positionList: Position[] = [];
  public filters: string[] = ["Filtrer", sideToString(Side.LEFT), sideToString(Side.RIGHT)];
  public side: Side = Side.UNDEFINED;
  public search: string = "";

  constructor(public positionsService: PositionsService) {
    this.positionsService.positions$.subscribe((positionList) => {
      this.positionList = positionList;
    })
  }


  ngOnInit(): void {
    this.positionsService.resetQuizzes();
  }


  public searchPositions(value: string) {
    this.positionsService.filterPositions(this.side, this.search = value);
  }


  public filterPositions(side: string) {
    this.positionsService.filterPositions(this.side = stringToSide(side), this.search);
  }

}