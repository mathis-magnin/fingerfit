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

    public selectedSide: Side = Side.UNDEFINED;

    public rightOrLeft: Side.LEFT | Side.RIGHT = Side.LEFT;

    @Input() twoPossibilities: boolean = false;

    @Input() boxStyle: BoxStyle = new BoxStyle({});

    @Output() sideSelected: EventEmitter<Side> = new EventEmitter<Side>();

    @Output() rightOrLeftSelected: EventEmitter<Side.LEFT | Side.RIGHT> = new EventEmitter<Side.LEFT | Side.RIGHT>();

    constructor() {}

    ngOnInit() {
        if (this.twoPossibilities) {
            for (let side = Side.LEFT; side <= Side.RIGHT; side++) {
                this.sides.push(side);
            }
        }
        else {
            for (let side = Side.UNDEFINED; side <= Side.BOTH; side++) {
                this.sides.push(side);
            }
        }
    }

    public onSelect(s: string) {
        if (this.twoPossibilities) {
            this.rightOrLeftSelected.emit(this.rightOrLeft);
        }
        else {
            this.selectedSide = stringToSide(s);
            this.sideSelected.emit(this.selectedSide);
        }
    }

}