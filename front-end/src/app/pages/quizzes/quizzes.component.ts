import { Component, Input } from '@angular/core';
import { NavbarItem } from 'src/models/navbar.model';
import { Position, Side, sideToString, stringToSide } from 'src/models/position.model';
import { Quiz } from 'src/models/quiz.model';
import { ButtonStyle, KeyboardStyle, ListStyle } from 'src/models/style-input.model';
import { PositionsService } from 'src/services/positions.service';
import { QuizzesService } from 'src/services/quizzes.service';

@Component({
    selector: 'app-positions',
    templateUrl: './quizzes.component.html',
    styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent {

    /* Styles and components variables */
    public currentPageIndex: number = 1;
    public navItems: NavbarItem[] = [{ name: 'Profils', url: '/profiles' }, { name: 'Quiz', url: '/quizzes' }, { name: 'Positions', url: '/positions' }];
    public exitButtonLink: string = '/home';

    public quizList: Quiz[] = [];
    public quizListStyle: ListStyle = { height: "70vh" };
    public quizListResearch: string = '';
    public quizListSide: Side = Side.UNDEFINED;

    public createButtonStyle: ButtonStyle = new ButtonStyle({ width: '7.5vw', height: '5vh' });
    public deleteButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh', backgroundColor: "red" });
    public cancelButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh', backgroundColor: "gray" });
    public validateButtonStyle: ButtonStyle = new ButtonStyle({ width: '10vw', height: '5vh' });


    /* Quiz creation variables */

    Side = Side;

    public manage: boolean = false;
    public modify: boolean = false;
    public popUp: boolean = false;
    public warning: string = "";

    public positionList: Position[] = [];
    public positionListResearch: string = '';
    public positionListSide: Side = Side.UNDEFINED;

    public quiz: Quiz = { id: 0, name: "", positions: [], side: Side.BOTH };
    public quizModified: Quiz = { id: 0, name: "", positions: [], side: Side.BOTH };


    /* Constructor */

    constructor(public quizzesServices: QuizzesService, public positionsService: PositionsService) {
        this.quizzesServices.quizzes$.subscribe((quizList) => {
            this.quizList = quizList;
        });

        this.positionsService.positions$.subscribe((positionList) => {
            this.positionList = positionList;
        })
    }


    /* List function */

    public searchQuizzes(value: string): void {
        this.quizzesServices.filterQuizzes(this.quizListSide, this.quizListResearch = value);
    }


    public filterQuizzes(side: string): void {
        this.quizzesServices.filterQuizzes(this.quizListSide = stringToSide(side), this.quizListResearch);
    }


    public searchPositions(value: string): void {
        this.positionsService.filterPositions(this.positionListSide, this.positionListResearch = value);
    }


    public filterPositions(side: string): void {
        this.positionsService.filterPositions(this.positionListSide = stringToSide(side), this.positionListResearch);
    }


    /* Quiz creation or modification */

    public reset(): void {
        this.manage = false;
        this.modify = false;
        this.popUp = false;
        this.warning = "";

        this.quiz = { id: 0, name: "", positions: [], side: Side.BOTH };
        this.quizModified = { id: 0, name: "", positions: [], side: Side.BOTH };
    }


    public creation(): void {
        this.manage = true;
        this.quiz = { id: 0, name: "", positions: [], side: Side.BOTH };
    }


    public modification(quiz: Quiz): void {
        if (quiz) {
            this.manage = true;
            this.modify = true;
            this.quiz.id = quiz.id;
            this.quiz.name = quiz.name;
            this.quiz.positions = quiz.positions;
            this.quiz.side = quiz.side
            this.quizModified = this.quiz;
        }
    }


    public updateName(event: any): void {
        this.quizModified.name = event.target.value;
    }


    public updatePositions(positions: Position[]): void {
        this.quizModified.positions = positions;
        this.quizModified.side = Side.BOTH;

        /* Define side of the quiz */
        if (0 < positions.length) {
            this.quizModified.side = positions[0].side;
            for (let position of positions) {
                if (this.quizModified.side != position.side) {
                    this.quizModified.side = Side.BOTH;
                    return;
                }
            }
        }
    }


    public showPopUp(): void {
        this.popUp = true;
    }


    public hidePopUp(): void {
        this.popUp = false;
    }


    public delete(): void {
        this.quizzesServices.deleteQuiz(this.quiz);
        this.reset();
    }


    public validate(): void {
        this.warning = (this.quizModified.name == "") ? ((this.quizModified.positions.length <= 0) ? "Veuillez remplir les champs" : "Veuillez nommer le quiz") : ((this.quizModified.positions.length <= 0) ? "Veuillez sélectionner au moins une position" : "");
        if (this.warning == "") {
            if (this.modify) {
                this.quizzesServices.updateQuiz(this.quizModified);
            }
            else {
                this.quizzesServices.createQuiz(this.quizModified)
            }
            this.reset();
        }
    }

}