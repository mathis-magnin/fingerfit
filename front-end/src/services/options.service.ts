import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Options, GameMode, TimeMesure } from '../models/options.model';
import { Quiz } from '../models/quiz.model';

@Injectable({
    providedIn: 'root'
})
export class OptionsService {

    public options$: BehaviorSubject<Options> =
        new BehaviorSubject<Options>({
            quiz: undefined,
            gameMode: GameMode.ALL_AT_ONCE,
            timeMesure: TimeMesure.NONE,
            countdown: 20
        });


    public setOptions(options: Options) {
        this.options$.next(options);
    }


    public clearOptions(): void {
        this.options$.next({
            quiz: undefined,
            gameMode: GameMode.ALL_AT_ONCE,
            timeMesure: TimeMesure.NONE,
            countdown: 20
        });
    }

}