import { Component } from '@angular/core';
import { BoxInput } from 'src/models/input.model';

@Component({
    selector: 'app-position-description-tab',
    templateUrl: './position-description-tab.component.html',
    styleUrls: ['./position-description-tab.component.scss']
})

export class PositionDescriptionTabComponent {

    public boxInput: BoxInput = { width: '5vw', backgroundColor: 'cornflowerblue' };
    public fingerBoxInput: BoxInput = { width: '10vw', backgroundColor: 'lightblue' };
    public keySelectionBoxInput: BoxInput = { width: '10vw', backgroundColor: 'antiquewhite' };
    public orderSelectionBoxInput: BoxInput = { width: '10vw', backgroundColor: 'antiquewhite' };

    constructor() {}

}