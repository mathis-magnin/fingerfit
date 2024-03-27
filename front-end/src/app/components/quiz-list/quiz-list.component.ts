import { Component, Output, EventEmitter } from '@angular/core';
import { QuizzesService } from '../../../services/quizzes.service';
import { Quiz } from '../../../models/quiz.model';


@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})



export class QuizListComponent {

    @Output()
    closeSelection: EventEmitter<boolean> = new EventEmitter<boolean>();

    public quizList: Quiz[] = [];

    constructor(public quizzesService: QuizzesService) {
        this.quizzesService.quizzes$.subscribe((quizList) => {
            this.quizList = quizList;
        });
    }

    quizSelected(Quiz: Quiz) {
        this.quizzesService.selectQuiz(Quiz);
        this.closeSelection.emit(true);
    }
}