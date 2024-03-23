import { Component, Input } from '@angular/core';

@Component({
selector: 'app-quiz',
templateUrl: './quiz.component.html',
styleUrl: './quiz.component.scss'
})

export class QuizComponent {
  
    @Input()
    public title: string = 'quiz';

    constructor() {}

}
