import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { BehaviorSubject } from 'rxjs';
import { OptionsService } from './options.service';
import { Side } from 'src/models/position.model';

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    public quiz: Quiz = { id: 0, name: "", positions: [], side: Side.BOTH };
    public quiz$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quiz);

    constructor(public optionsService: OptionsService) {
        this.optionsService.options$.subscribe((options) => {
            if (options.quiz) {
                this.quiz$.next(options.quiz);
            }
        });
    }
}