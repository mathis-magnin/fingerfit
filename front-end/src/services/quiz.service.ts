import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { BehaviorSubject } from 'rxjs';
import { QUIZ_LIST } from 'src/mocks/quiz-list.mock';
import { OptionsService } from './options.service';

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    public quiz$: BehaviorSubject<Quiz> = new BehaviorSubject(QUIZ_LIST[0]);

    constructor(public optionsService: OptionsService) {
        this.optionsService.options$.subscribe((options) => {
            if(options.quiz){
                this.quiz$.next(options.quiz);
            }
        });
    }
}