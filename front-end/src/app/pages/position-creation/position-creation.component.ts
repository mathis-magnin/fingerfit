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
    public deleteButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '10vh', backgroundColor: "red" });
    public cancelButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '10vh', backgroundColor: "grey" });
    public createButtonStyle: ButtonStyle = new ButtonStyle({ width: '7.5vw', height: '5vh' });

    public buttonText: string = 'Créer';

    public isWarningVisible: boolean = false;
    public currentError: string = "";


    /* Position creation variables */

    Side = Side;
    sideToString = sideToString;

    public manage: boolean = false;

    public position: Position = { keys: [], side: Side.LEFT, id: 0 };
    public positionModified: Position = { keys: [], side: Side.LEFT, id: 0 };
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
        this.buttonText = 'Créer';
        this.manage = true;
        this.position = { keys: [], side: Side.LEFT, id: 0 };
    }


    public modification(position: Position) {
        if (position) {
            this.buttonText = 'Modifier';
            this.manage = true;
            this.position.keys = position.keys;
            this.position.side = position.side;
            this.position.id = position.id;
        }
        else {
            /* Ce n'est pas censé arriver. */
        }
    }


    public updateSide(side: string) {
        this.positionModified.side = (stringToSide(side) == Side.LEFT) ? Side.LEFT : Side.RIGHT;
        this.positionModified.id = this.position.id;
    }


    public updateKeys(keys: Key[]) {
        console.log(keys);
        this.positionModified.keys = keys;
        this.positionModified.id = this.position.id;
    }


    public cancel() {
        this.manage = false;
        this.positionModified = { keys: [], side: Side.LEFT, id: 0 };
    }

    public deletePosition() {
        this.positionsService.deletePosition(this.position);
        this.manage = false;
        this.positionModified = { keys: [], side: Side.LEFT, id: 0 };
    }

    public validateChanges() {
        if (this.positionModified.keys.length != 0) {
            if(this.buttonText == 'Créer') {
                this.positionsService.addPosition(this.positionModified);
            }
            else {
                this.positionsService.updatePosition(this.positionModified);
            }
            this.manage = false;
            this.positionModified = { keys: [], side: Side.LEFT, id: 0 };
        }          
        else {
            this.currentError = "La position doit faire travailler au moins un doigt.";
            this.isWarningVisible = true;
        }
    }

}