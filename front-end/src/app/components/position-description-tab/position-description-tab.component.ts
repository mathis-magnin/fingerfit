import { Component } from '@angular/core';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-position-description-tab',
    templateUrl: './position-description-tab.component.html',
    styleUrls: ['./position-description-tab.component.scss']
})

export class PositionDescriptionTabComponent {

    public boxStyle: BoxStyle = { width: '5vw', backgroundColor: 'cornflowerblue' };
    public fingerBoxStyle: BoxStyle = { width: '10vw', backgroundColor: 'lightblue' };
    public keySelectionBoxStyle: BoxStyle = { width: '10vw', backgroundColor: 'antiquewhite' };
    public orderSelectionBoxStyle: BoxStyle = { width: '10vw', backgroundColor: 'antiquewhite' };

    constructor() {}

}