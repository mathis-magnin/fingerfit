import { Component } from '@angular/core';
import { Finger, Symbol, Key, IsSymbolPressed, Position } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

    Finger = Finger; // To use enum in html
    Symbol = Symbol;

    public keys: Key[] = [];

    private symbolsToPress: Symbol[] = [];

    private symbolsPressed: Symbol[] = [];

    constructor(public quizService: QuizService) {
        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.keys.push({ symbol: symbol, finger: Finger.UNDEFINED })
        }

        this.quizService.position$.subscribe(
            (position: Position) => {
                for (let key of position.keys) {
                    this.keys[key.symbol].finger = key.finger;
                    if(key.finger !== Finger.UNDEFINED) {
                        this.symbolsToPress.push(key.symbol);
                    }
                }
            }
        )
    }

    updateKeysPressed(isKeyPressed: IsSymbolPressed) : void {
        if (isKeyPressed.isPressed && !this.symbolsPressed.includes(isKeyPressed.symbol)) {
            this.symbolsPressed.push(isKeyPressed.symbol);
        }
        else if(!isKeyPressed.isPressed) {
            this.symbolsPressed = this.symbolsPressed.filter(symbol => symbol !== isKeyPressed.symbol);
        }
        console.log(this.symbolsPressed); /* A SUPPRIMER */

        if(this.isPositionFinished()) {
            console.log("Position finished"); /* A SUPPRIMER */
        }
    }

    isPositionFinished(): boolean {
        console.log("Lenght of symbolsPressed: ", this.symbolsPressed.length); /* A SUPPRIMER */
        console.log("Lenght of symbolsToPress: ", this.symbolsToPress.length); /* A SUPPRIMER */
        if (this.symbolsPressed.length === this.symbolsToPress.length) {
            for (let s of this.symbolsToPress) {
                console.log("symbolsToPress symbol: ", s); /* A SUPPRIMER */
                if (!this.symbolsPressed.includes(s)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}