import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { Options } from '../models/options.model';


@Injectable({
    providedIn: 'root'
})
export class QuizService {

    private quizzes: Quiz[] = QUIZ_LIST;
    public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);
    public options$: BehaviorSubject<Options> =
        new BehaviorSubject<Options>({
            hand: 'R',
            chronometer: false,
            timePerQuestion: undefined,
            quiz: undefined
        });

    constructor() { }

    public selectQuiz(quiz: Quiz): void {
        this.options$.next({ ...this.options$.value, quiz });
    }

    public switchHand(hand: string): void {
        this.options$.next({ ...this.options$.value, hand });
    }

    public switchChronometer(): void {
        this.options$.next({ ...this.options$.value, chronometer: !this.options$.value.chronometer });
    }

    public getTimer(): number {
        if (this.options$.value.timePerQuestion) {
            return this.options$.value.timePerQuestion;
        }
        else {
            return 0;
        }
    }

    public getHand(): string {
        return this.options$.value.hand;
    }

    public setTimer(time: number): void {
        this.options$.next({ ...this.options$.value, timePerQuestion: time });
    }

    public switchTimer(): void {
        if (this.options$.value.timePerQuestion)
            this.options$.next({ ...this.options$.value, timePerQuestion: undefined });
        else
            this.options$.next({ ...this.options$.value, timePerQuestion: 20 });
    }

    public checkOptions(): boolean {
        if (this.options$.value.quiz) {
            return true;
        }
        else {
            return false;
        }
    }
}

