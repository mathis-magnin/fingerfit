import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
@Component({
    selector: 'app-exit-button',
    templateUrl: './exit-button.component.html',
    styleUrls: ['./exit-button.component.scss']
})

export class ExitButtonComponent implements OnInit {

    @Input()
    public link: string = '\home';

    @Input()
    public text?: string;

    @Input()
    public exitFunction?: () => void;

    constructor(private quizService: QuizService) { }
    
    ngOnInit(): void { }
    
    public exit(): void {
        if (this.exitFunction) {
            this.exitFunction();
        }
    }
}