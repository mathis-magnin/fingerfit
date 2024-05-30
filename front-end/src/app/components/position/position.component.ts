import { Component, Input } from '@angular/core';
import { Position, Side } from 'src/models/position.model';
import { Symbol } from 'src/models/key.model';
import { HandsStyle, KeyStyle } from 'src/models/style-input.model';


@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrl: './position.component.scss'
})

export class PositionComponent {

    Symbol = Symbol;
    @Input() public position: Position = { keys: [], side: Side.LEFT, id: 0 };

    @Input() public handsStyle: HandsStyle = { width: "10vh", height: "10vh" };
    @Input() public keyStyle: KeyStyle = { fontSize: "1.5em" }

    constructor() { }

    ngOnInit() {
    }

}