import { Injectable } from '@angular/core';
import { Position } from '../models/quiz.model';
import { BehaviorSubject } from 'rxjs';
import { QuizService } from './quiz.service';
import { TimerService } from './timer.service';


@Injectable({
    providedIn: 'root'
})
export class PositionService {

    private currentPositionIndex: number = 0;
    public currentPositionIndex$: BehaviorSubject<number> = new BehaviorSubject(this.currentPositionIndex);

    public numberOfPositions$: BehaviorSubject<number> = new BehaviorSubject(this.quizService.quiz$.value.positions.length);

    private position: Position = this.quizService.quiz$.value.positions[this.currentPositionIndex];
    public position$: BehaviorSubject<Position> = new BehaviorSubject(this.position);


    constructor(public quizService: QuizService, public TimerService: TimerService) {
        this.quizService.quiz$.subscribe(
            (quiz) => {
                this.position = quiz.positions[this.currentPositionIndex];
                this.position$.next(this.position);
                this.numberOfPositions$.next(quiz.positions.length);
            }
        )
    }


    nextPosition(time: boolean): boolean {
        if (time)
            this.TimerService.stop();

        this.currentPositionIndex$.next(++this.currentPositionIndex);

        if (this.currentPositionIndex >= this.quizService.quiz$.value.positions.length) {
            this.currentPositionIndex$.next(this.currentPositionIndex = 0);
            this.position = this.quizService.quiz$.value.positions[this.currentPositionIndex];
            this.position$.next(this.position);
            return false;
        }
        else {
            this.position = this.quizService.quiz$.value.positions[this.currentPositionIndex];
            this.position$.next(this.position);
            return true;
        }

    }


    positionStart(time: boolean): void {
        if (time) {
            this.TimerService.clearTimer();
            this.TimerService.startTimer();
        }
    }
}