import { Component, Input } from '@angular/core';
import { AnswersService } from 'src/services/answers.service';
import { ButtonStyle } from 'src/models/style-input.model';
import { NavbarItem } from 'src/models/navbar.model';

@Component({
  selector: 'app-congrats',
  templateUrl: './congrats.component.html',
  styleUrls: ['./congrats.component.scss']
})
export class CongratsComponent {
  public currentPageIndex: number = 0;
  public navItems: NavbarItem[] = [{ name: 'Félicitations !', url: '/congrats' }];
  public exitButtonLink: string = '/options';

  public showPopup: boolean = false;

  public replayButtonStyle: ButtonStyle = new ButtonStyle({ width: '8vw', height: '8vh', fontSize: '2vw' });

  public quitButtonStyle: ButtonStyle = new ButtonStyle({ width: '8vw', height: '8vh', fontSize: '2vw', backgroundColor: '#ff0000' });

  constructor(private answersService: AnswersService) { }

  public getAverageTime(): number {
    return Number(this.answersService.getAverageTime().toFixed(2));
  }

  public getCorrectPercentage(): number {
    return Math.trunc(this.answersService.getCorrectPercentage());
  }

  public togglePopup(exit: boolean): void {
    this.showPopup = !exit;
  }
}