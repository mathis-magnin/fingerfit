import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { BehaviorSubject } from 'rxjs';
import { QUIZ_LIST } from 'src/mocks/quiz-list.mock';
import { QuizzesService } from './quizzes.service';

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    private quiz: Quiz = QUIZ_LIST[0];
    public quiz$: BehaviorSubject<Quiz> = new BehaviorSubject(QUIZ_LIST[0]);

    constructor() { }
    
}