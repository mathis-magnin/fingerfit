import { Component } from '@angular/core';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-position-description-tab',
    templateUrl: './position-description-tab.component.html',
    styleUrls: ['./position-description-tab.component.scss']
})

export class PositionDescriptionTabComponent {

    public boxStyle: BoxStyle = new BoxStyle({ width: '5vw', backgroundColor: 'cornflowerblue' });
    public fingerBoxStyle: BoxStyle = new BoxStyle({ width: '10vw', backgroundColor: 'lightblue' });
    public keySelectionBoxStyle: BoxStyle = new BoxStyle({ width: '10vw', backgroundColor: 'antiquewhite' });
    public orderSelectionBoxStyle: BoxStyle = new BoxStyle({ width: '10vw', backgroundColor: 'antiquewhite' });

    constructor() {}

}