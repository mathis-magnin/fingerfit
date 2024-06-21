import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { serverUrl, httpOptionsBase } from 'src/configs/server.config';
import { HttpClient } from '@angular/common/http';
import { Statistic } from 'src/models/statistic.model';
import { Answer } from 'src/models/answer.model';
import { PlayerService } from './player.service';
import { Profile } from 'src/models/profile.model';
import { Position } from 'src/models/position.model';
import { PositionService } from './position.service';

@Injectable({
    providedIn: 'root'
})

export class StatisticService {

    public statistic$: BehaviorSubject<Statistic | undefined> = new BehaviorSubject<Statistic | undefined>(undefined);
    private player?: Profile;
    private position?: Position;
    public statisticUrl = serverUrl;
    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient, private positionService: PositionService) { 
        this.positionService.position$.subscribe((position) => {
            this.position = position;
        });
    }

    public fetchStat(): void {
        console.log(this.player?.id);
        console.log(this.position?.id);
        this.http.get<Statistic[]>(this.statisticUrl + '/?positionId=' + this.position?.id + '&userId=' + this.player?.id).subscribe((statistics) => {
            this.statistic$.next(statistics[0]);
            console.log(statistics[0]);
        });
    }

    public updateUrl(player: Profile): void {
        this.player = player;
        this.statisticUrl = serverUrl + '/users/' + this.player?.id + '/statistics';
    }

    public updateStat(answer: Answer): void {
        const statistic = this.statistic$.value;
        if (statistic && statistic.id !== undefined) {
            console.log(statistic);
            let newStat: Statistic = {
                averageTime: (statistic.averageTime * statistic.nbData + answer.time) / (statistic.nbData + 1),
                times: statistic.times.concat([answer.time]),
                accuracy: (statistic.nbData * statistic.accuracy + (answer.correct ? 1 : 0)) / (statistic.nbData + 1),
                nbData: statistic.nbData + 1,
                positionId: statistic.positionId,
                userId: statistic.userId,
                id : statistic.id,
            }
            this.http.put<Statistic>(this.statisticUrl + '/' + statistic.id, newStat, this.httpOptions).subscribe(() => {
                this.fetchStat();
            });
        } else {
            if (statistic === undefined) {
                console.log("statistic is undefined");
            }
            let newStat: Statistic = {
                averageTime: answer.time,
                times: [answer.time],
                accuracy: answer.correct ? 1 : 0,
                nbData: 1,
                positionId: this.position ? this.position.id : 0,
                userId: this.player ? this.player.id : 0,
                id : 0,
            }
            this.http.post<Statistic>(this.statisticUrl, newStat, this.httpOptions).subscribe(() => {
                this.fetchStat();
            });
        }
    }
}