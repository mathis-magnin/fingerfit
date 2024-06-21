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

    public statistics: Statistic[] = [];
    public statistics$: BehaviorSubject<Statistic[]> = new BehaviorSubject<Statistic[]>(this.statistics);
    public allStatistics$: BehaviorSubject<Statistic[]> = new BehaviorSubject<Statistic[]>(this.statistics);
    private player?: Profile;
    private statisticsUrl = serverUrl + '/users/9999999999999/statistics';
    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient) { 
        this.fetchStatistics();
    }

    public updateUrl(player: Profile): void {
        console.log("update du joueur dans statistics service : " + player.name);
        this.player = player;
        this.statisticsUrl = serverUrl + '/users/' + this.player?.id + '/statistics';
        this.fetchStatistics();
    }

    public fetchStatistics(): void {
        console.log("recherche des statistiques de " + this.player?.name);
        this.http.get<Statistic[]>(this.statisticsUrl + "/?userId=" + this.player?.id).subscribe((statisticList) => {
            this.statistics = statisticList;
            this.allStatistics$.next(this.statistics);
            this.statistics$.next([]);
        });
        console.log("statistiques trouvées : " + this.statistics.length);
    }

    public filterStatistics(positions: Position[]): void {
        let filteredStatistics: Statistic[] = [];
        console.log("filtrage de " + this.statistics.length + " statistiques");
        for (let i = 0; i < this.statistics.length; i++) {
            for (let j = 0; j < positions.length; j++) {
                if (this.statistics[i].positionId === positions[j].id) {
                    filteredStatistics.push(this.statistics[i]);
                }
            }
        }
        this.statistics$.next(filteredStatistics);
    }

    public deleteUserStatistics(): void {
        this.fetchStatistics();
        for (let statistic of this.statistics) {
            this.http.delete<Statistic>(this.statisticsUrl + '/' + statistic.id).subscribe(() => {
            });
        }
    }

    public deletePositionStatistics(positionId: number): void {
        this.http.get<Statistic[]>(this.statisticsUrl + '/?positionId=' + positionId).subscribe((statistics) => {
            for (let statistic of statistics) {
                this.http.delete<Statistic>(this.statisticsUrl + '/' + statistic.id).subscribe(() => {
                });
            }
        });
    }
}