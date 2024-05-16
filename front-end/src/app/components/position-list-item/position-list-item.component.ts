import { Component, Input } from '@angular/core';
import { Position } from '../../../models/quiz.model';
import { EventEmitter, Output } from '@angular/core';
import { Side } from '../../../models/quiz.model';
import { ButtonStyle, HandStyle, KeyStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-position-list-item',
    templateUrl: './position-list-item.component.html',
    styleUrl: './position-list-item.component.scss'
})
export class PositionListItemComponent {

    Side = Side;

    @Input() choseButtonStyle: ButtonStyle = new ButtonStyle({ width: '7.5vw', height: '5vh' });
    public keyStyle: KeyStyle = { fontSize: "1.125em" }
    public handStyle: HandStyle = { width: "7.5vh", height: "7.5vh" }

    @Input() position: Position | undefined;
    @Input() isSelected: boolean = false;

    @Output() positionSelected: EventEmitter<Position> = new EventEmitter<Position>();

    choosePosition() {
        if (this.position) {
            this.positionSelected.emit(this.position);
        }
    }

    deletePosition() {
    }

}