import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Options } from '../models/options.model';
import { Quiz } from '../models/quiz.model';

@Injectable({
    providedIn: 'root'
})
export class TimerService {

    public timer: any;
    public count = 0;
    public time$: BehaviorSubject<number> = new BehaviorSubject(this.count);
    constructor() {
    }

    public startTimer(): void {
        if (!this.timer) {
            this.timer = setInterval(() => {
                this.count+=0.01;
                this.time$.next(this.count);
                console.log(this.count);
            }, 10);
        }
    }

    public clearTimer(): void {
        this.count = 0;
        this.time$.next(this.count);
    }

    public stop(): void {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
    
}