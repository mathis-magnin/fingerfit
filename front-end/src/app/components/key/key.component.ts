import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Finger, IsSymbolPressed, Symbol, stringToSymbol, symbolToString } from '../../../models/quiz.model';
import { keyStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-key',
    templateUrl: './key.component.html',
    styleUrls: ['./key.component.scss']
})
export class KeyComponent {

    @Input() keyStyle: keyStyle = { fontSize: "3em" }

    Symbol = Symbol;
    symbolToString = symbolToString;
    @Input() public symbol: Symbol = Symbol.UNDEFINED;

    Finger = Finger;
    @Input() public finger: Finger = Finger.UNDEFINED;

    public isDown: IsSymbolPressed = { symbol: this.symbol, isPressed: false };
    @Output() public keyPressed: EventEmitter<IsSymbolPressed> = new EventEmitter();

    @HostListener('document:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        if ((stringToSymbol(event.key.toUpperCase()) === this.symbol) && !this.isDown.isPressed) {
            this.isDown = { symbol: this.symbol, isPressed: true };
            this.keyPressed.emit(this.isDown);
        }
        console.log(event.key.toUpperCase() + ' down'); /* A SUPPRIMER */
    }

    @HostListener('document:keyup', ['$event'])
    handleKeyUp(event: KeyboardEvent) {
        if ((stringToSymbol(event.key.toUpperCase()) === this.symbol) && this.isDown.isPressed) {
            this.isDown = { symbol: this.symbol, isPressed: false };
            this.keyPressed.emit(this.isDown);
        }
        console.log(event.key.toUpperCase() + ' up'); /* A SUPPRIMER */
    }

    constructor() { }

}