import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-super-hand',
    templateUrl: './super-hand.component.html',
    styleUrls: ['./super-hand.component.scss']
})



export class SuperHandComponent {

    @Input() public congratulation: string = 'Bravo ! ';

    constructor() {
    }
}