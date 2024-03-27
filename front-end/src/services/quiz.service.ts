import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { BehaviorSubject } from 'rxjs';
import { QUIZ_LIST } from 'src/mocks/quiz-list.mock';

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    private quiz?: Quiz;
    public quiz$: BehaviorSubject<Quiz> = new BehaviorSubject(QUIZ_LIST[0]);

    constructor() { }

}