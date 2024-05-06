import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Finger, Symbol, Key, IsSymbolPressed, Position } from 'src/models/quiz.model';
import { KeyStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

    Finger = Finger; // To use enum in html
    Symbol = Symbol;

    public keys: Key[] = [];

    @Input() public keysToPress: Key[] = [];

    @Input() public keyStyle: KeyStyle = { fontSize: '3em' };

    private symbolsPressed: Symbol[] = [];

    @Output() public nextPosition: EventEmitter<void> = new EventEmitter();

    @Output() public isCorrect: EventEmitter<boolean> = new EventEmitter();

    updateSymbolsPressed(isKeyPressed: IsSymbolPressed) : void {
        if (isKeyPressed.isPressed && !this.symbolsPressed.includes(isKeyPressed.symbol)) {
            this.symbolsPressed.push(isKeyPressed.symbol);
        }
        else if(!isKeyPressed.isPressed) {
            this.symbolsPressed = this.symbolsPressed.filter(symbol => symbol !== isKeyPressed.symbol);
        }
        console.log(this.symbolsPressed); /* A SUPPRIMER */

        if (this.isPositionFinished()) {
            this.nextPosition.emit();
        }
    }

    isPositionFinished(): boolean {
        if (this.symbolsPressed.length === this.keysToPress.length) {
            for (let k of this.keysToPress) {
                if (!this.symbolsPressed.includes(k.symbol)) {
                    return false;
                }
            }
            this.isCorrect.emit(true);
            return true;
        }
        this.isCorrect.emit(false);
        return false;
    }

    constructor() { }

    ngOnChanges(): void {
        this.keys = [];
        this.symbolsPressed = [];

        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.keys.push({ symbol: symbol, finger: Finger.UNDEFINED })
        }

        for (let key of this.keysToPress) {
            this.keys[key.symbol].finger = key.finger;
        }
    }

}