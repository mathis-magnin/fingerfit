import { Component, Input } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { Side } from '../../../models/quiz.model';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.scss'
})
export class QuizComponent {

    Side = Side;

    @Input() quiz: Quiz | undefined = undefined;
    @Input() showDetails: boolean = false;

}