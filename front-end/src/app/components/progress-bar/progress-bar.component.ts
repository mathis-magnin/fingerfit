import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {

    @Input() positions: number = 0;

    @Input() current_position: number = 0;

    constructor() { }

}