import { Component, Input } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { EventEmitter, Output } from '@angular/core';
import { Side } from '../../../models/quiz.model';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrl: './position.component.scss'
})

export class PositionComponent {

    public showMore: boolean = false;
    public detailsString: string = "Details"
    public src: string = "../../../assets/left_hand.png";
    @Input()
    quiz: Quiz | undefined;

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
