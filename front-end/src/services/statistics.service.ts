import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { serverUrl, httpOptionsBase } from 'src/configs/server.config';
import { HttpClient } from '@angular/common/http';
import { Statistic } from 'src/models/statistic.model';

@Injectable({
    providedIn: 'root'
})

export class StatisticsService {

    private statistics: Statistic[] = [];
    public statistics$: BehaviorSubject<Statistic[]> = new BehaviorSubject<Statistic[]>(this.statistics);
    private statisticsUrl = serverUrl + '/statistics';
    private httpOptions = httpOptionsBase;

    constructor(private http: HttpClient) { 
        this.fetchStatistics();
    }

    public fetchStatistics(): void {
        this.http.get<Statistic[]>(this.statisticsUrl).subscribe((statisticList) => {
            this.statistics$.next(statisticList);
        });
    }
}