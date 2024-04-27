import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Options } from '../models/options.model';
import { Quiz } from '../models/quiz.model';

@Injectable({
    providedIn: 'root'
})
export class TimerService {

    public timer: any;
    public stopTime: number = 0;
    public startTime: number=0;
    public count = 0;
    public time$: BehaviorSubject<number> = new BehaviorSubject(this.count);
    constructor() {
    }

    public startTimer(): void {
        const lag=Date.now()-this.stopTime;
        if (!this.timer) {
            if (this.startTime==0)
                this.startTime = Date.now();
            else {
                console.log('lag', lag);
                this.startTime+=lag;
            }
            this.timer = setInterval(() => {
                this.count = (Date.now() - this.startTime) / 1000;
                this.time$.next(this.count);
            }, 10);
        }
    }

    public clearTimer(): void {
        this.startTime = 0;
        this.count = 0;
        this.time$.next(this.count);
    }

    public stop(): void {
        this.stopTime = Date.now();
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
    
}