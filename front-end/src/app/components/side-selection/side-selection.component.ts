import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Side, sideToString, stringToSide } from 'src/models/position.model';

@Component({
    selector: 'app-side-selection',
    templateUrl: './side-selection.component.html',
    styleUrls: ['./side-selection.component.scss']
})
export class SideSelectionComponent {

    public sideToString = sideToString;
    public sides: Side[] = [];

    public selectedSide: Side = Side.UNDEFINED;

    public rightOrLeft: Side.LEFT | Side.RIGHT = Side.LEFT;

    @Input() twoPossibilities: boolean = false;

    @Input() threePossibilities: boolean = false;

    @Output() sideSelected: EventEmitter<Side> = new EventEmitter<Side>();

    @Output() rightOrLeftSelected: EventEmitter<Side.LEFT | Side.RIGHT> = new EventEmitter<Side.LEFT | Side.RIGHT>();

    constructor() {}

    ngOnInit() {
        if (this.twoPossibilities) {
            for (let side = Side.LEFT; side <= Side.RIGHT; side++) {
                this.sides.push(side);
            }
        }
        else if (this.threePossibilities) {
            for (let side = Side.UNDEFINED; side <= Side.RIGHT; side++) {
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