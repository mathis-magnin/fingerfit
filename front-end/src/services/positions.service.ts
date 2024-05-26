import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { POSITION_LIST } from '../mocks/quiz-list.mock';
import { Position, Side } from 'src/models/position.model';
import { symbolToString } from 'src/models/key.model';


@Injectable({
    providedIn: 'root'
})
export class PositionsService {

    public positions$: BehaviorSubject<Position[]> = new BehaviorSubject(POSITION_LIST);

    constructor() { }

    public filterPositions(side: Side, searchValue: string): void {
        let filteredPositions: Position[] = [];

        const searchTerm = searchValue.toLowerCase();

        for (let i = 0; i < POSITION_LIST.length; i++) {
            let name: string = '';
            for (var key of POSITION_LIST[i].keys) {
                name = name.concat((symbolToString(key.symbol) == "ESPACE") ? " " : symbolToString(key.symbol));
            }
            name = name.toLowerCase();

            let include: boolean = true;
            for (var char of searchTerm) {
                if (!name.includes(char)) {
                    include = false;
                }
            }
            if (include) {
                filteredPositions.push(POSITION_LIST[i]);
            }
        }

        if (side !== Side.UNDEFINED) {
            filteredPositions = filteredPositions.filter(position => position.side === side);
        }
        this.positions$.next(filteredPositions);
    }

    public resetQuizzes(): void {
        this.positions$.next(POSITION_LIST);
    }
}