import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Side } from '../models/position.model';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import { HttpClient } from '@angular/common/http';
import { httpOptionsBase, serverUrl } from 'src/configs/server.config';


export interface QuizBack {
    id: number;
    name: string;
    positions: number[];
    side: Side;
}


@Injectable({
    providedIn: 'root'
})
export class QuizzesService {

    public quizzes: Quiz[] = [];
    public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

    private QuizUrl = serverUrl + '/quizzes';
    private httpOptions = httpOptionsBase;


    constructor(private http: HttpClient) {
        this.fetchQuizzes();
    }


    /* Database functions */

    public fetchQuizzes(): void {
        this.http.get<Quiz[]>(this.QuizUrl).subscribe((quizList) => {
            console.log(quizList);
            this.quizzes = quizList;
            this.quizzes$.next(this.quizzes);
        });
    }


    public createQuiz(quiz: Quiz): void {
        this.http.post<QuizBack>(this.QuizUrl, quiz, this.httpOptions).subscribe(() => {
            this.fetchQuizzes();
        });
    }


    public updateQuiz(quiz: Quiz): void {
        this.http.put<QuizBack>(this.QuizUrl + '/' + quiz.id, quiz).subscribe(() => {
            this.fetchQuizzes();
        });
    }


    public deleteQuiz(quiz: Quiz): void {
        this.http.delete<QuizBack>(this.QuizUrl + '/' + quiz.id).subscribe(() => {
            this.fetchQuizzes();
        })
    }


    /* Filter functions */

    public filterQuizzes(side: Side, searchValue: string): void {
        let filteredQuizzes: Quiz[] = this.quizzes;

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
        this.quizzes$.next(this.quizzes);
    }

}