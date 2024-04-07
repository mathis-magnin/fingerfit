import { Injectable } from '@angular/core';
import { Position } from '../models/quiz.model';
import { BehaviorSubject } from 'rxjs';
import { QuizService } from './quiz.service';
import { TimerService } from './timer.service';

@Injectable({
    providedIn: 'root'
})
export class PositionService {

    private current_position_index: number = 0;
    private position: Position = this.quizService.quiz$.value.positions[this.current_position_index];
    public position$: BehaviorSubject<Position> = new BehaviorSubject(this.position);

    constructor(public quizService: QuizService, public TimerService: TimerService) {
        this.quizService.quiz$.subscribe(
            (quiz) => {
                this.position = quiz.positions[this.current_position_index];
                this.position$.next(this.position);
            }
        )
    }

    nextPosition(): boolean {
        this.TimerService.stop();
        this.current_position_index++;
        if (this.current_position_index >= this.quizService.quiz$.value.positions.length) {
            this.current_position_index = 0;
            this.position = this.quizService.quiz$.value.positions[this.current_position_index];
            this.position$.next(this.position);
            return false;
        }
        else {
            this.position = this.quizService.quiz$.value.positions[this.current_position_index];
            this.position$.next(this.position);
            return true;
        }

    }

    positionStart(): void {
        this.TimerService.clearTimer();
        this.TimerService.startTimer();
    }
}