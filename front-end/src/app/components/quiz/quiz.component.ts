import { Component, Input } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { Side } from '../../../models/position.model';
import { HandsStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.scss'
})
export class QuizComponent {

    Side = Side;
    public handsStyle: HandsStyle = { width: "10vh", height: "10vh" };

    @Input() quiz: Quiz | undefined = undefined;
    @Input() showDetails: boolean = false;

}