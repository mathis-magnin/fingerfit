import { Component, Input } from '@angular/core';
import { Finger, Symbol, symbolToString } from '../../../models/quiz.model';

@Component({
    selector: 'app-key',
    templateUrl: './key.component.html',
    styleUrls: ['./key.component.scss']
})
export class KeyComponent {

    Symbol = Symbol;
    symbolToString = symbolToString;
    @Input() public symbol: Symbol = Symbol.UNDEFINED;

    Finger = Finger; // To use enum in html
    @Input() public finger: Finger = Finger.UNDEFINED;

    constructor() { }

}