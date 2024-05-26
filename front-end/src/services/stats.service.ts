import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Answer } from 'src/models/answer.model';

@Injectable({
    providedIn: 'root'
})
export class StatsService {

    private answers: Answer[] = [];
    public answers$: BehaviorSubject<Answer[]> = new BehaviorSubject<Answer[]>([]);

    constructor() { }

    public getAverageTime(): number {
        let sum = 0;
        this.answers.forEach(answer => {
            sum += answer.time;
        });
        return sum / this.answers.length;
    }

    public getCorrectPercentage(): number {
        let correctAnswers = 0;
        this.answers.forEach(answer => {
            if (answer.correct) {
                correctAnswers++;
            }
        });
        return correctAnswers / this.answers.length * 100;
    }

    public addAnswer(answer: Answer): void {
        this.answers.push(answer);
        this.answers$.next(this.answers);
    }

    public clearAnswers(): void {
        this.answers = [];
        this.answers$.next(this.answers);
    }
}