import { Component, Input } from '@angular/core';
import { flatMap } from 'rxjs';
import { Finger, Key, Position, Side, Symbol } from 'src/models/quiz.model';
import { ButtonStyle, KeyboardStyle, PositionListStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-position-creation',
    templateUrl: './position-creation.component.html',
    styleUrls: ['./position-creation.component.scss']
})
export class PositionCreationComponent {

    public create: boolean = false;
    public modify: boolean = false;

    @Input() public keyboardStyle: KeyboardStyle = new KeyboardStyle(1.75);

    public allKeysInRed: Key[] = [];

    public buttonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vw', fontSize: '1.5vw' });
    public createButtonStyle: ButtonStyle = new ButtonStyle({ width: '7.5vw', height: '5vh' });

    public endCreation: boolean = false;

    public positionCreated: Position = { keys: [], side: Side.LEFT };

    public positionListStyle: PositionListStyle = { height: "70vh" };

    constructor() {
        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.allKeysInRed.push({ symbol: symbol, finger: Finger.THUMB })
        }
    }

    public onSideSelected(side: Side.LEFT | Side.RIGHT): void {
        this.positionCreated.side = side;
    }


    public updatePosition(positionKeys: Key[]): void {
        this.positionCreated.keys = positionKeys;
        console.log(this.positionCreated);
    }


    public creation(): void {
        this.create = true;
        this.modify = false;
    }


    public modification(): void {
        this.create = false;
        this.modify = true;
    }


    public validate(): void {
        this.create = false;
        this.modify = false;
        this.endCreation = true;
    }
}