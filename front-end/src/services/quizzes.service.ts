import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position, Side } from '../models/position.model';
import { Quiz } from '../models/quiz.model';
import { HttpClient } from '@angular/common/http';
import { httpOptionsBase, serverUrl } from 'src/configs/server.config';


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
            this.quizzes = quizList;
            this.quizzes$.next(this.quizzes);
        });
    }


    public createQuiz(quiz: Quiz): void {
        this.http.post<Quiz>(this.QuizUrl, quiz, this.httpOptions).subscribe(() => {
            this.fetchQuizzes();
        });
    }


    public updateQuiz(quiz: Quiz): void {
        this.http.put<Quiz>(this.QuizUrl + '/' + quiz.id, quiz).subscribe(() => {
            this.fetchQuizzes();
        });
    }


    public deleteQuiz(quiz: Quiz): void {
        this.http.delete<Quiz>(this.QuizUrl + '/' + quiz.id).subscribe(() => {
            this.fetchQuizzes();
        })
    }


    public updatePositionFromQuizzes(position: Position) {
        for (let quiz of this.quizzes) {
            if (quiz.positions.find((p) => (p.id === position.id))) {
                quiz.side = position.side;
                for (let quizPosition of quiz.positions) {
                    if ((quizPosition.id !== position.id) && (quiz.side != quizPosition.side)) {
                        quiz.side = Side.BOTH;
                        break;
                    }
                }
                console.log(quiz);
                this.updateQuiz(quiz);
            }
        }
    }


    public removePositionFromQuizzes(position: Position) {
        /* Find quizzes to update */
        let quizzesToUpdate: Quiz[] = [];
        for (let quiz of this.quizzes) {
            if (quiz.positions.find((p) => (p.id === position.id))) {
                quizzesToUpdate.push(quiz);
            }
        }

        /* Removing position from quizzes */
        for (let quiz of quizzesToUpdate) {
            for (let i = 0; i < quiz.positions.length; i++) {
                if (quiz.positions[i].id === position.id) {
                    quiz.positions.splice(i, 1);
                    break;
                }
            }
            if (0 < quiz.positions.length) {
                this.updateQuiz(quiz);
            }
            else {
                this.deleteQuiz(quiz);
            }
        }
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