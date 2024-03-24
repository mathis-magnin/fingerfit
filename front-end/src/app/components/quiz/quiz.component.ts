import { Component, Input } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { EventEmitter, Output } from '@angular/core';

@Component({
selector: 'app-quiz',
templateUrl: './quiz.component.html',
styleUrl: './quiz.component.scss'
})

export class QuizComponent {
  
    @Input()
    quiz: Quiz | undefined;

    @Output()
    quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    constructor() {}

    quizIsChosen() {
        if (this.quiz) {
            this.quizSelected.emit(this.quiz);
        }
    }
}
