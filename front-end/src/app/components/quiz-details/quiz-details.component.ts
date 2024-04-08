import { Component, Input } from '@angular/core';
import { Quiz, Side } from 'src/models/quiz.model';


@Component({
    selector: 'app-quiz-details',
    templateUrl: './quiz-details.component.html',
    styleUrl: './quiz-details.component.scss'
})

export class QuizDetailsComponent {

    @Input()
    public quiz: Quiz | undefined;

    constructor() { }

    ngOnInit() {
    }

}
