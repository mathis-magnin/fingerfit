import { Component, Input } from '@angular/core';
import { Finger, Key, Position, Side, Symbol, sideToString, stringToSide, symbolToString } from 'src/models/quiz.model';
import { ButtonStyle, KeyboardStyle, ListStyle } from 'src/models/style-input.model';
import { PositionsService } from 'src/services/positions.service';

@Component({
    selector: 'app-position-creation',
    templateUrl: './position-creation.component.html',
    styleUrls: ['./position-creation.component.scss']
})
export class PositionCreationComponent {

    /* Styles and components variables */

    public positionList: Position[] = [];
    public positionListStyle: ListStyle = { height: "70vh" };
    public listResearch: string = '';
    public listSide: Side = Side.UNDEFINED;

    public keyboardStyle: KeyboardStyle = new KeyboardStyle(1.75);
    public allKeysInRed: Key[] = [];

    public buttonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '10vh' });
    public createButtonStyle: ButtonStyle = new ButtonStyle({ width: '7.5vw', height: '5vh' });


    /* Position creation variables */

    Side = Side;
    sideToString = sideToString;

    public manage: boolean = false;

    public position: Position = { keys: [], side: Side.LEFT };
    public positionModified: Position = { keys: [], side: Side.LEFT };
    public sidePossibilities: string[] = [sideToString(Side.LEFT), sideToString(Side.RIGHT)];


    /* Constructor */

    constructor(public positionsService: PositionsService) {
        this.positionsService.positions$.subscribe((positionList) => {
            this.positionList = positionList;
        });

        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.allKeysInRed.push({ symbol: symbol, finger: Finger.THUMB })
        }
    }


    /* List function */

    public searchPositions(value: string) {
        this.positionsService.filterPositions(this.listSide, this.listResearch = value);
    }


    public filterPositions(side: string) {
        this.positionsService.filterPositions(this.listSide = stringToSide(side), this.listResearch);
    }


    /* Position creation or modification */

    public creation() {
        this.manage = true;
        this.position = { keys: [], side: Side.LEFT };
    }


    public modification(position: Position) {
        if (position) {
            this.manage = true;
            this.position.keys = position.keys;
            this.position.side = position.side;
        }
    }


    public updateSide(side: string) {
        this.positionModified.side = (stringToSide(side) == Side.LEFT) ? Side.LEFT : Side.RIGHT;
    }


    public updateKeys(keys: Key[]) {
        console.log(keys);
        this.positionModified.keys = keys;
    }


    public validate() {
        this.manage = false;
        /* Appeller le service pour enregistrer positionModified */
    }

}