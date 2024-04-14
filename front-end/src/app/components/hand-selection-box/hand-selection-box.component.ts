import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Side, sideToString, stringToSide } from 'src/models/quiz.model';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-hand-selection-box',
    templateUrl: './hand-selection-box.component.html',
    styleUrls: ['./hand-selection-box.component.scss']
})
export class HandSelectionBoxComponent {

    public sideToString = sideToString;
    public sides: Side[] = [];

    public selectedSide: Side = Side.LEFT;

    @Input() boxStyle: BoxStyle = new BoxStyle({});

    @Output() sideSelected: EventEmitter<Side> = new EventEmitter<Side>();

    constructor() {
        for (let side = Side.LEFT; side <= Side.RIGHT; side++) {
            this.sides.push(side);
        }
    }

    public onSelect(s: string) {
        this.selectedSide = stringToSide(s);
        console.log(this.selectedSide);
        this.sideSelected.emit(this.selectedSide);
    }

}