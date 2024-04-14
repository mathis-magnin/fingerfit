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

    Side = Side;

    public showMore: boolean = false;
    public detailsString: string = "Details";

<<<<<<< HEAD
    @Input()
    detailButtonStyle: ButtonStyle = new ButtonStyle({ width: '5vw', height: '5vh', backgroundColor: 'rgb(128, 185, 203)' });

    @Input()
    choseButtonStyle: ButtonStyle = new ButtonStyle({ width: '5vw', height: '5vh' });

    @Output()
    quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();
=======
    @Input() quiz: Quiz | undefined;
    @Input() isSelected: boolean = false;
>>>>>>> develop

    @Output() quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();


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
