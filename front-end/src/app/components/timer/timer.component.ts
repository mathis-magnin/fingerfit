import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimerService } from 'src/services/timer.service';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit {

    public counter: number = 0;
    public endNear: boolean = false;

    @Input()
    public maxTime: number | undefined = undefined;

    @Input()
    public start: boolean = false;

    @Output()
    public timeOut: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor(public TimerService: TimerService) {
        this.TimerService.time$.subscribe((time) => {
            this.counter = Math.trunc(time);
            this.checkTime();
        });
    }

    ngOnInit(): void {
        if (this.start)
            this.startTimer();
    }

    public startTimer(): void {
        this.TimerService.clearTimer();
        this.TimerService.startTimer();
    }

    public clearTimer(): void {
        this.TimerService.clearTimer();
        this.endNear = false;
    }

    public checkTime(): void {
        if (this.maxTime && this.maxTime - this.counter <= 10) {
            this.endNear = true;
        }
        if (this.maxTime && this.maxTime - this.counter <= 0) {
            this.end();
        }

    }

    public end(): void {
        this.timeOut.emit(true);
        this.endNear = false;
    }

    ngOnDestroy(): void {
        this.TimerService.stop();
    }




}