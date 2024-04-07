import { Component } from '@angular/core';
import { Finger, Key, Symbol } from 'src/models/quiz.model';

@Component({
    selector: 'app-position-creation',
    templateUrl: './position-creation.component.html',
    styleUrls: ['./position-creation.component.scss']
})
export class PositionCreationComponent {

    public allKeysInRed: Key[] = [];

    constructor() {
        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.allKeysInRed.push({ symbol: symbol, finger: Finger.THUMB })
        }
    }

}