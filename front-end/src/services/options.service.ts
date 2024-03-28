import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Options, Side } from '../models/options.model';
import { Quiz } from '../models/quiz.model';

@Injectable({
    providedIn: 'root'
})
export class OptionsService {

    public options$: BehaviorSubject<Options> =
        new BehaviorSubject<Options>({
            hand: Side.RIGHT,
            chronometer: false,
            timePerQuestion: undefined,
            quiz: undefined
        });

    constructor() { }

    public selectQuiz(quiz: Quiz): void {
        this.options$.next({ ...this.options$.value, quiz });
    }

    public switchHand(hand: Side): void {
        this.options$.next({ ...this.options$.value, hand });
    }

    public setChronometer(set: boolean): void {
        if (set)
            this.options$.next({ ...this.options$.value, chronometer: true });
        else
            this.options$.next({ ...this.options$.value, chronometer: false });
    }

    public setTime(time: number): void {
        this.options$.next({ ...this.options$.value, timePerQuestion: time });
    }

    public setTimer(set: boolean): void {
        if (!set)
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

    public clearOptions(): void {
        this.options$.next({
            hand: Side.RIGHT,
            chronometer: false,
            timePerQuestion: undefined,
            quiz: undefined
        });
    }
}