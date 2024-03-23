import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})

export class QuizListComponent {

    @Input()
    public text: string = 'quiz-list';

    constructor() {}
}