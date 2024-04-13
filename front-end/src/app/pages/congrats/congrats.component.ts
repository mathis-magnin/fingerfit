import { Component } from '@angular/core';
import { StatsService } from 'src/services/stats.service';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss']
})
export class CongratsComponent {

  constructor(private statsService: StatsService) { }

  public getAverageTime(): number {
    return Number(this.statsService.getAverageTime().toFixed(2));
  }

  public getCorrectPercentage(): number {
    return Math.trunc(this.statsService.getCorrectPercentage());
  }
}