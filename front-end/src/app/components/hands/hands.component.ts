import { Component, Input } from '@angular/core';
import { Side } from 'src/models/position.model';
import { Finger, Key } from 'src/models/key.model';
import { HandsStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-hands',
    templateUrl: './hands.component.html',
    styleUrl: './hands.component.scss'
})
export class HandsComponent {

    Side = Side;
    @Input() public side: Side = Side.RIGHT;

    @Input() public keysToPress: Key[] = [];

    @Input() public handsStyle: HandsStyle = { width: "30vh", height: "30vh" };

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