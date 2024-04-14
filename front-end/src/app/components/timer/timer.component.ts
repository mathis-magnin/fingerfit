import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimerService } from 'src/services/timer.service';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit {

    public counterS: number = 0;
    
    @Input()
    public paused: boolean = false;

    @Input()
    public maxTime: number | undefined = undefined;

    @Input()
    public start: boolean = false;

    @Input()
    public stop: boolean = false;

    @Output()
    public timeOut: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(public TimerService: TimerService) {
        this.TimerService.time$.subscribe((time) => {
            this.counterS = Math.trunc(time);
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
    }

    public checkTime(): void {
        if (this.maxTime && this.maxTime - this.counterS <= 0) {
            this.end();
        }
    }

    public end(): void {
        this.timeOut.emit(true);
    }

    ngOnDestroy(): void {
        this.TimerService.stop();
    }

}