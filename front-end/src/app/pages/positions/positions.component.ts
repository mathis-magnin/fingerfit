import { Component, Input } from '@angular/core';
import { Key, Symbol, Finger } from 'src/models/key.model';
import { NavbarItem } from 'src/models/navbar.model';
import { Position, Side, sideToString, stringToSide } from 'src/models/position.model';
import { ButtonStyle, HandsStyle, KeyboardStyle, ListStyle } from 'src/models/style-input.model';
import { PositionsService } from 'src/services/positions.service';

@Component({
    selector: 'app-positions',
    templateUrl: './positions.component.html',
    styleUrls: ['./positions.component.scss']
})
export class PositionsComponent {

    /* Styles and components variables */

    public currentPageIndex: number = 2;
    public navItems: NavbarItem[] = [{ name: 'Profils', url: '/profiles' }, { name: 'Quiz', url: '/quizzes' }, { name: 'Positions', url: '/positions' }];
    public exitButtonLink: string = '/home';

    public positionList: Position[] = [];
    public positionListStyle: ListStyle = { height: "70vh" };
    public listResearch: string = '';
    public listSide: Side = Side.UNDEFINED;

    public handsStyle: HandsStyle = { width: '25vh', height: '25vh' };
    public keyboardStyle: KeyboardStyle = new KeyboardStyle(2);

    public validateButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh' });
    public deleteButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh', backgroundColor: "red" });
    public cancelButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh', backgroundColor: "black" });
    public createButtonStyle: ButtonStyle = new ButtonStyle({ width: '7.5vw', height: '5vh' });

    public warning: string = "";
    public popUp: boolean = false;


    /* Position creation variables */

    Side = Side;
    sideToString = sideToString;

    public manage: boolean = false;
    public update: boolean = false;
    public positionTest: boolean = false;

    public position: Position = { keys: [], side: Side.LEFT, id: 0 };
    public positionModified: Position = { keys: [], side: Side.LEFT, id: 0 };
    public sidePossibilities: string[] = [sideToString(Side.LEFT), sideToString(Side.RIGHT)];


    /* Constructor */

    constructor(public positionsService: PositionsService) {
        this.positionsService.positions$.subscribe((positionList) => {
            for (let i=0; i<positionList.length; i++) { // Create a deep copy the list to avoid reference problems
                this.positionList[i] = positionList[i];
            }
            this.positionList.reverse(); // To have the last added position at the top of the list
        });
    }


    /* List function */

    public searchPositions(value: string) {
        this.positionsService.filterPositions(this.listSide, this.listResearch = value);
    }


    public filterPositions(side: string) {
        this.positionsService.filterPositions(this.listSide = stringToSide(side), this.listResearch);
    }


    /* Position creation or modification */

    public reset(): void {
        this.manage = false;
        this.update = false;
        this.popUp = false;
        this.positionTest = false;
        this.warning = "";

        this.position = { keys: [], side: Side.LEFT, id: 0 };
        this.positionModified = { keys: [], side: Side.LEFT, id: 0 };
        this.positionsService.resetPositions();
    }


    public creation() {
        this.manage = true;
        this.position = { keys: [], side: Side.LEFT, id: 0 };
    }


    public modification(position: Position) {
        if (position) {
            this.manage = true;
            this.update = true;
            this.position.keys = position.keys;
            this.position.side = position.side;
            this.position.id = position.id;
            this.positionModified = this.position;
        }
    }


    public updateSide(side: string) {
        this.positionModified.side = (stringToSide(side) == Side.LEFT) ? Side.LEFT : Side.RIGHT;
    }


    public updateKeys(keys: Key[]) {
        this.positionModified.keys = keys;
    }


    public showPopup(): void {
        this.popUp = !this.popUp;
    }


    public deletePosition() {
        this.positionsService.deletePosition(this.position);
        this.reset();
    }


    public validateChanges() {
        if (this.update) {
            this.positionsService.updatePosition(this.positionModified);
        }
        else {
            this.positionsService.addPosition(this.positionModified);
        }
        this.reset();
    }

    public testPosition(): void {
        this.warning = (this.positionModified.keys.length == 0) ? "La position doit faire travailler au moins un doigt" : "";
        this.positionTest = (this.warning == "");
    }

    public stopTest(): void {
        this.positionTest = false;
    }

}