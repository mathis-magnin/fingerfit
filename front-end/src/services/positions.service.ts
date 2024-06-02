import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position, Side } from 'src/models/position.model';
import { symbolToString } from 'src/models/key.model';
import { HttpClient } from '@angular/common/http';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import { QuizzesService } from './quizzes.service';


@Injectable({
    providedIn: 'root'
})
export class PositionsService {

    private positions: Position[] = [];
    public positions$: BehaviorSubject<Position[]> = new BehaviorSubject(this.positions);
    private positionUrl = serverUrl + '/positions';
    private httpOptions = httpOptionsBase;


    constructor(private http: HttpClient, private quizzesService: QuizzesService) {
        this.fetchPositions();
    }


    public fetchPositions(): void {
        this.http.get<Position[]>(this.positionUrl).subscribe((positionList) => {
            this.positions = positionList;
            this.positions$.next(this.positions);
        });
    }


    public filterPositions(side: Side, searchValue: string): void {
        let filteredPositions: Position[] = [];

        const searchTerm = searchValue.toLowerCase();

        for (let i = 0; i < this.positions.length; i++) {
            let name: string = '';
            for (var key of this.positions[i].keys) {
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
                filteredPositions.push(this.positions[i]);
            }
        }

        if (side !== Side.UNDEFINED) {
            filteredPositions = filteredPositions.filter(position => position.side === side);
        }
        this.positions$.next(filteredPositions);
    }


    public resetPositions(): void {
        this.positions$.next(this.positions);
    }


    public addPosition(position: Position): void {
        this.http.post<Position>(this.positionUrl, position, this.httpOptions).subscribe(() => {
            this.fetchPositions();
        });
    }


    public updatePosition(position: Position): void {
        this.http.put<Position>(this.positionUrl + '/' + position.id, position).subscribe(() => {
            this.fetchPositions();
            this.quizzesService.updatePositionFromQuizzes(position);
        });
    }


    public deletePosition(position: Position): void {
        this.http.delete<Position>(this.positionUrl + '/' + position.id).subscribe(() => {
            this.fetchPositions();
            this.quizzesService.removePositionFromQuizzes(position);
        })
    }

}