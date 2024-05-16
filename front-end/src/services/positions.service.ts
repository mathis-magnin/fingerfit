import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position, Quiz, Side } from '../models/quiz.model';
import { POSITION_LIST } from '../mocks/quiz-list.mock';


@Injectable({
    providedIn: 'root'
})
export class PositionsService {

    public positions$: BehaviorSubject<Position[]> = new BehaviorSubject(POSITION_LIST);

    constructor() { }

    public filterQuizzes(side: Side, searchValue: string): void {
        let filteredPositions: Position[] = POSITION_LIST;

        // if (searchValue.trim() !== '') {
        //     const searchTerm = searchValue.toLowerCase();
        //     filteredPositions = filteredPositions.filter(quiz => quiz.name.toLowerCase().includes(searchTerm));
        // }

        if (side !== Side.UNDEFINED) {
            filteredPositions = filteredPositions.filter(position => position.side === side);
        }
        this.positions$.next(filteredPositions);
    }

    public resetQuizzes(): void {
        this.positions$.next(POSITION_LIST);
    }
}