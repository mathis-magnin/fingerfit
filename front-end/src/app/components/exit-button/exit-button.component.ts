import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { QuizzesService } from 'src/services/quizzes.service';
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

    constructor(private quizzesService: QuizzesService) { }

    ngOnInit(): void { }

    public exit(): void {
        if (this.exitFunction) {
            this.exitFunction();
        }
    }
}