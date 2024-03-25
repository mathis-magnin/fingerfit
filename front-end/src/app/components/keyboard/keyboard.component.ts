import { Component } from '@angular/core';
import { Finger } from '../../../models/finger.model';
import { Key } from '../../../models/question.model';

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

    Finger = Finger; // To use enum in html

    public keys: Key[] = [
        { label: "A", finger: Finger.UNDEFINED }, // Line 1
        { label: "Z", finger: Finger.UNDEFINED },
        { label: "E", finger: Finger.UNDEFINED },
        { label: "R", finger: Finger.UNDEFINED },
        { label: "T", finger: Finger.UNDEFINED },
        { label: "Y", finger: Finger.UNDEFINED },
        { label: "U", finger: Finger.UNDEFINED },
        { label: "I", finger: Finger.UNDEFINED },
        { label: "O", finger: Finger.UNDEFINED },
        { label: "P", finger: Finger.UNDEFINED },
        { label: "Q", finger: Finger.UNDEFINED }, // Line 2
        { label: "S", finger: Finger.UNDEFINED },
        { label: "D", finger: Finger.UNDEFINED },
        { label: "F", finger: Finger.UNDEFINED },
        { label: "G", finger: Finger.UNDEFINED },
        { label: "H", finger: Finger.UNDEFINED },
        { label: "J", finger: Finger.UNDEFINED },
        { label: "K", finger: Finger.UNDEFINED },
        { label: "L", finger: Finger.UNDEFINED },
        { label: "M", finger: Finger.UNDEFINED },
        { label: "W", finger: Finger.UNDEFINED }, // Line 3
        { label: "X", finger: Finger.UNDEFINED },
        { label: "C", finger: Finger.UNDEFINED },
        { label: "V", finger: Finger.UNDEFINED },
        { label: "B", finger: Finger.UNDEFINED },
        { label: "N", finger: Finger.UNDEFINED },
        { label: "?", finger: Finger.UNDEFINED },
        { label: ".", finger: Finger.UNDEFINED },
        { label: "/", finger: Finger.UNDEFINED },
        { label: "§", finger: Finger.UNDEFINED },
        { label: "ESPACE", finger: Finger.UNDEFINED }, // Line 4
    ];

    constructor() { }

}