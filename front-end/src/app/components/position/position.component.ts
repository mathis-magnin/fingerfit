import { Component, Input } from '@angular/core';
import { Position, Side } from 'src/models/quiz.model';


@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrl: './position.component.scss'
})

export class PositionComponent {

    @Input() public position: Position = { keys: [], side: Side.LEFT };

    constructor() { }

    ngOnInit() {
    }

}
