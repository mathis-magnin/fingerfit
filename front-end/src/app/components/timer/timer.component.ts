import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})

export class Timer implements OnInit {

    public counter: number = 0;
    public endNear: boolean = false;

    @Input()
    public maxTime: number | undefined = undefined;

    @Input()
    public show: boolean = false;

    @Output()
    public timeOut: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void {
        this.startTimer();
    }

    public startTimer(): void {
        setInterval(() => {
            if (this.maxTime && this.counter === this.maxTime) {
                this.timeOut.emit(true);
            }
            else {
                this.counter++;
            }
            if (this.maxTime && this.counter + 10 >= this.maxTime) {
                this.endNear = true;
            }
        }, 1000);
    }


}