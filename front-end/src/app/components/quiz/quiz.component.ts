import { Component, Input } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { EventEmitter, Output } from '@angular/core';
import { Side } from '../../../models/quiz.model';
import { ButtonStyle } from 'src/models/style-input.model';

@Component({
selector: 'app-quiz',
templateUrl: './quiz.component.html',
styleUrl: './quiz.component.scss'
})

export class QuizComponent {

    public showMore: boolean = false;
    public detailsString: string ="Details"
    public src: string = "../../../assets/left_hand.png";
    @Input()
    quiz: Quiz | undefined;

    @Input()
    detailButtonStyle: ButtonStyle = new ButtonStyle({ width: '5vw', height: '5vh', backgroundColor: 'rgb(128, 185, 203)' });

    @Input()
    choseButtonStyle: ButtonStyle = new ButtonStyle({ width: '5vw', height: '5vh' });

    @Output()
    quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    constructor() { }

    ngOnInit() {
        if (this.quiz) {
            if (this.quiz.side === Side.RIGHT) {
                this.src = "../../../assets/right_hand.png";
            }
        }
    }

    quizIsChosen() {
        if (this.quiz) {
            this.quizSelected.emit(this.quiz);
        }
    }

    showMoreInfo() {
        this.showMore = !this.showMore;
        if (this.showMore) {
            this.detailsString = "Cacher";
        } else {
            this.detailsString = "Details";
        }
    }
}
