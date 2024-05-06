import { Component, Input } from '@angular/core';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss']
})
export class BoxComponent {

    @Input() boxStyle: BoxStyle = new BoxStyle({});

    constructor() {}

}