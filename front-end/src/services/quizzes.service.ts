import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz, Side } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';


@Injectable({
    providedIn: 'root'
})
export class QuizzesService {

    public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);

    constructor() { }

    public filterQuizzes(side: Side, searchValue: string): void {
        let filteredQuizzes: Quiz[] = QUIZ_LIST;

        if (searchValue.trim() !== '') {
            const searchTerm = searchValue.toLowerCase();
            filteredQuizzes = filteredQuizzes.filter(quiz => quiz.name.toLowerCase().includes(searchTerm));
        }

        if (side !== Side.UNDEFINED) {
            filteredQuizzes = filteredQuizzes.filter(quiz => quiz.side === side);
        }
        this.quizzes$.next(filteredQuizzes);
    }

    public resetQuizzes(): void {
        this.quizzes$.next(QUIZ_LIST);
    }
}


