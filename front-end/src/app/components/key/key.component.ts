import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Finger, IsKeyPressed, Symbol, stringToSymbol, symbolToString } from '../../../models/quiz.model';

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

    public isDown: IsKeyPressed = { symbol: this.symbol, isPressed: false };
    @Output() public keyPressed: EventEmitter<IsKeyPressed> = new EventEmitter();

    @HostListener('document:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        if (stringToSymbol(event.key.toUpperCase()) === this.symbol) {
            this.isDown.isPressed = true;
            this.keyPressed.emit(this.isDown);
        }
        console.log(event.key + ' down'); /* A SUPPRIMER */
    }

    @HostListener('document:keyup', ['$event'])
    handleKeyUp(event: KeyboardEvent) {
        if (stringToSymbol(event.key.toUpperCase()) === this.symbol) {
            this.isDown.isPressed = false;
            this.keyPressed.emit(this.isDown);
        }
        console.log(event.key + ' up'); /* A SUPPRIMER */
    }

    constructor() { }

}