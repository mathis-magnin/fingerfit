import { Component, Input } from '@angular/core';
import { StatsService } from 'src/services/stats.service';
import { ButtonStyle } from 'src/models/style-input.model';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss']
})
export class CongratsComponent {
  public showPopup: boolean = false;

  public replayButtonStyle: ButtonStyle = new ButtonStyle({ width: '8vw', height: '8vh', fontSize: '2vw' });

  public quitButtonStyle: ButtonStyle = new ButtonStyle({ width: '8vw', height: '8vh', fontSize: '2vw', backgroundColor: '#ff0000' });

  constructor(private statsService: StatsService) { }

  public getAverageTime(): number {
    return Number(this.statsService.getAverageTime().toFixed(2));
  }

  public getCorrectPercentage(): number {
    return Math.trunc(this.statsService.getCorrectPercentage());
  }

  public togglePopup(exit: boolean): void {
    this.showPopup = !exit;
  }
}