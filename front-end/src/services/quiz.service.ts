import { Injectable } from '@angular/core';
import { Quiz, Position } from '../models/quiz.model';
import { BehaviorSubject } from 'rxjs';
import { QUIZ_LIST } from 'src/mocks/quiz-list.mock';

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    private position?: Position;
    public position$: BehaviorSubject<Position> = new BehaviorSubject(QUIZ_LIST[0].positions[0]);

    constructor() { }

}