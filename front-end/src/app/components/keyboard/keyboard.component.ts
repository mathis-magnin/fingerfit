import { Component } from '@angular/core';
import { Finger, Symbol, Key, symbolToString } from '../../../models/quiz.model';

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

    Finger = Finger; // To use enum in html
    Symbol = Symbol;

    public keys: Key[] = [];

    constructor() {
        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.keys.push({ symbol: symbol, finger: Finger.UNDEFINED })
        }
    }
}