import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { serverUrl, httpOptionsBase } from 'src/configs/server.config';
import { HttpClient } from '@angular/common/http';
import { Statistic } from 'src/models/statistic.model';
import { Profile } from 'src/models/profile.model';
import { PlayerService } from './player.service';
import { StatisticService } from './statistic.service';
import { Position } from 'src/models/position.model';

@Injectable({
    providedIn: 'root'
})

export class StatisticsService {

    private statistics: Statistic[] = [];
    public statistics$: BehaviorSubject<Statistic[]> = new BehaviorSubject<Statistic[]>(this.statistics);
    private player?: Profile;
    private statisticsUrl = serverUrl + '/statistics';
    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient, private playerService: PlayerService) { 
        this.playerService.player$.subscribe((player) => {
            this.player = player;
        });
        this.fetchStatistics();
    }

    public updateUrl(): void {
        this.statisticsUrl = serverUrl + '/users/' + this.player?.id + '/statistics';
        this.fetchStatistics();
    }

    public fetchStatistics(): void {
        this.http.get<Statistic[]>(this.statisticsUrl + "/?userId=" + this.player?.id).subscribe((statisticList) => {
            this.statistics = statisticList;
            this.statistics$.next(this.statistics);
        });
    }

    public filterStatistics(positions: Position[]): void {
        let filteredStatistics: Statistic[] = [];
        for (let i = 0; i < this.statistics.length; i++) {
            for (let j = 0; j < positions.length; j++) {
                if (this.statistics[i].positionId === positions[j].id) {
                    filteredStatistics.push(this.statistics[i]);
                }
            }
        }
        this.statistics$.next(filteredStatistics);
    }
}