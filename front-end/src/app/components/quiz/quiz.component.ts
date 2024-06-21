import { Component, Input } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { Side } from '../../../models/position.model';
import { HandsStyle, KeyStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrl: './quiz.component.scss'
})
export class QuizComponent {

    Side = Side;
    public handsStyle: HandsStyle = { width: "10vh", height: "10vh" };

    public positionsHandsStyle: HandsStyle = { width: "7.5vh", height: "7.5vh" };
    public positionsKeyStyle: KeyStyle = { fontSize: "1.25em" };

    @Input() quiz: Quiz | undefined = undefined;
    @Input() showDetails: boolean = false;

}