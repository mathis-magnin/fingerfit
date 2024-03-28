import { Component } from '@angular/core';
import { Finger, Symbol, Key, symbolToString, Position } from 'src/models/quiz.model';
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

    constructor(public quizService: QuizService) {
        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.keys.push({ symbol: symbol, finger: Finger.UNDEFINED })
        }

        this.quizService.position$.subscribe(
            (position: Position) => {
                for (let key of position.keys) {
                    this.keys[key.symbol].finger = key.finger;
                }
            }
        )
    }
}