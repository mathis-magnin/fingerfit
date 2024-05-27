import { Component, Input } from '@angular/core';
import { Key, Symbol, Finger } from 'src/models/key.model';
import { NavbarItem } from 'src/models/navbar.model';
import { Position, Side, sideToString, stringToSide } from 'src/models/position.model';
import { ButtonStyle, KeyboardStyle, ListStyle } from 'src/models/style-input.model';
import { PositionsService } from 'src/services/positions.service';

@Component({
    selector: 'app-position-creation',
    templateUrl: './position-creation.component.html',
    styleUrls: ['./position-creation.component.scss']
})
export class PositionCreationComponent {

    /* Styles and components variables */
    public currentPageIndex: number = 0;
    public navItems: NavbarItem[] = [{ name: 'Gestion des positions de main', url: '/position-creation' }];
    public exitButtonLink: string = '/profiles';

    public positionList: Position[] = [];
    public positionListStyle: ListStyle = { height: "70vh" };
    public listResearch: string = '';
    public listSide: Side = Side.UNDEFINED;

    public keyboardStyle: KeyboardStyle = new KeyboardStyle(1.75);
    public allKeysInPurple: Key[] = [];

    public validateButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '10vh' });
    public cancelButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '10vh', backgroundColor: "red" });
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
            this.allKeysInPurple.push({ symbol: symbol, finger: Finger.INDEX })
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


    public cancel() {
        this.manage = false;
    }


    public validate() {
        this.manage = false;
        /* Appeller le service pour enregistrer positionModified */
    }

}