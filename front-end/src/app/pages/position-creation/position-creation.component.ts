import { Component, Input } from '@angular/core';
import { Finger, Key, Position, Side, Symbol } from 'src/models/quiz.model';
import { ButtonStyle, KeyboardStyle, QuizListStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-position-creation',
    templateUrl: './position-creation.component.html',
    styleUrls: ['./position-creation.component.scss']
})
export class PositionCreationComponent {

    @Input() public keyboardStyle: KeyboardStyle = new KeyboardStyle(1.75);

    public allKeysInRed: Key[] = [];

    public buttonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vw', fontSize: '1.5vw' });

    public endCreation: boolean = false;

    public positionCreated: Position = { keys: [], side: Side.LEFT };

    public quizListStyle: QuizListStyle = { height: "80vh" };

    constructor() {
        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.allKeysInRed.push({ symbol: symbol, finger: Finger.THUMB })
        }
    }

    public onSideSelected(side: Side.LEFT | Side.RIGHT): void {
        this.positionCreated.side = side;
    }

    public onCreationEnd(): void {
        this.endCreation = true;
    }

    public updatePosition(positionKeys: Key[]): void {
        this.positionCreated.keys = positionKeys;
        console.log(this.positionCreated);
    }

}