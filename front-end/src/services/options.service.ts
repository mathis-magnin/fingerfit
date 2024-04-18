import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Options } from '../models/options.model';
import { Quiz, Side } from '../models/quiz.model';

@Injectable({
    providedIn: 'root'
})
export class OptionsService {

    public options$: BehaviorSubject<Options> =
        new BehaviorSubject<Options>({
            chronometer: false,
            timePerQuestion: undefined,
            quiz: undefined,
        });

    constructor() { }

    public selectQuiz(quiz: Quiz): void {
        this.options$.next({ ...this.options$.value, quiz });
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
/*
    public setHand(side: Side): void {
        this.options$.next({ ...this.options$.value, side });
    }
*/
    public clearOptions(): void {
        this.options$.next({
            chronometer: false,
            timePerQuestion: undefined,
            quiz: undefined,
        });
    }
}