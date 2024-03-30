import { Component } from '@angular/core';
import { Finger, Symbol, Key, IsKeyPressed, Position } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

    Finger = Finger; // To use enum in html
    Symbol = Symbol;

    public keysToPress: Key[] = [];

    private keysPressed: Symbol[] = [];

    constructor(public quizService: QuizService) {
        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.keysToPress.push({ symbol: symbol, finger: Finger.UNDEFINED })
        }

        this.quizService.position$.subscribe(
            (position: Position) => {
                for (let key of position.keys) {
                    this.keysToPress[key.symbol].finger = key.finger;
                }
            }
        )
    }

    updateKeysPressed(isKeyPressed: IsKeyPressed) : void {
        if (isKeyPressed.isPressed) {
            this.keysPressed.push(isKeyPressed.symbol);
        }
        else {
            this.keysPressed = this.keysPressed.filter(symbol => symbol !== isKeyPressed.symbol);
        }
    }

    /*updatePosition(): void {
        if (this.isPositionFinished()) {
            this.quizService.positionFinished();
        }
    }*/

    isPositionFinished(): boolean {
        if (this.keysPressed.length === this.keysToPress.length) {
            for (let k in this.keysToPress) {
                if (!this.keysPressed.includes(this.keysToPress[k].symbol)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}