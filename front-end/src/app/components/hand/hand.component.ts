import { Component, Input } from '@angular/core';
import { Finger, Position } from 'src/models/quiz.model';
import { Side } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
    selector: 'app-hand',
    templateUrl: './hand.component.html',
    styleUrl: './hand.component.scss'
})
export class HandComponent {

    Side = Side;
    @Input() public side: Side = Side.RIGHT;

    Finger = Finger;
    public fingers: boolean[] = [];

    constructor(public quizService: QuizService) {
        for (let finger = Finger.THUMB; finger <= Finger.PINKY; finger++) {
            this.fingers.push(false);
        }

        this.quizService.position$.subscribe(
            (position: Position) => {
                for (let key of position.keys) {
                    this.fingers[key.finger] = true;
                }
            }
        )
    }

}