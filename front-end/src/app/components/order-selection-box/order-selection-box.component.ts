import { Component, Input } from '@angular/core';
import { BoxInput } from 'src/models/input.model';

@Component({
    selector: 'app-order-selection-box',
    templateUrl: './order-selection-box.component.html',
    styleUrls: ['./order-selection-box.component.scss']
})

export class OrderSelectionBoxComponent {

    @Input() boxInput: BoxInput = { width: '15vw', backgroundColor: 'lightblue' };

    constructor() {}

}