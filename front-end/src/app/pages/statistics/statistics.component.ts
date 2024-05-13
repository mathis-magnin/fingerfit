import { Component } from '@angular/core';
import { QuizListStyle } from 'src/models/style-input.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent {

  public quizListStyle: QuizListStyle = { height: "75vh" };

  constructor() { }
}