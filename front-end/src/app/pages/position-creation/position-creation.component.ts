import { Component } from '@angular/core';
import { Finger, Key, Position, Symbol } from 'src/models/quiz.model';
import { ButtonStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-position-creation',
    templateUrl: './position-creation.component.html',
    styleUrls: ['./position-creation.component.scss']
})
export class PositionCreationComponent {

    public allKeysInRed: Key[] = [];

    public buttonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vw', fontSize: '1.5vw' });

    public endCreation: boolean = false;

    public positionCreated: Position = { keys: [] };

    constructor() {
        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.allKeysInRed.push({ symbol: symbol, finger: Finger.THUMB })
        }
    }

    public onCreationEnd(): void {
        this.endCreation = true;
    }

    public updatePosition(position: Position): void {
        this.positionCreated = position;
        console.log(this.positionCreated);
    }

}