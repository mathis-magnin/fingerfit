import { Component, Input } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { EventEmitter, Output } from '@angular/core';
import { Side } from '../../../models/quiz.model';


@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.scss'
})
export class QuizComponent {

    Side = Side;

    public showMore: boolean = false;
    public detailsString: string = "Details";

    @Input() quiz: Quiz | undefined;
    @Input() isSelected: boolean = false;

    @Output() quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();


    quizIsChosen() {
        if (this.quiz) {
            this.quizSelected.emit(this.quiz);
        }
    }

    toggleMoreInfo() {
        this.showMore = !this.showMore;
        if (this.showMore) {
            this.detailsString = "Cacher";
        } else {
            this.detailsString = "Details";
        }
    }
}
