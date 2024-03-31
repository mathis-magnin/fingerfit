import { Component, Input } from '@angular/core';
import { Finger, Key, Side } from 'src/models/quiz.model';

@Component({
    selector: 'app-hand',
    templateUrl: './hand.component.html',
    styleUrl: './hand.component.scss'
})
export class HandComponent {

    Side = Side;
    @Input() public side: Side = Side.RIGHT;

    @Input() public keysToPress: Key[] = [];

    Finger = Finger;
    public fingers: boolean[] = [];

    constructor() { }

    ngOnChanges(): void {
        this.fingers = [];

        for (let finger = Finger.THUMB; finger <= Finger.PINKY; finger++) {
            this.fingers.push(false);
        }

        for (let key of this.keysToPress) {
            this.fingers[key.finger] = true;
        }
    }

}