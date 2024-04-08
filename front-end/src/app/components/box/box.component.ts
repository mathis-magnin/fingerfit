import { Component, Input } from '@angular/core';
import { BoxInput } from 'src/models/input.model';

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss']
})
export class BoxComponent {

    @Input() boxInput: BoxInput = { width: '15vw', backgroundColor: 'lightblue' };

    constructor() {}

}