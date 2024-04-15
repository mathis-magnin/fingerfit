import { Injectable } from '@angular/core';
import { Key } from '../models/quiz.model';
import { BehaviorSubject } from 'rxjs';
import { PositionService } from './position.service';

@Injectable({
    providedIn: 'root'
})
export class KeyService {

    private currentKeyIndex: number = 0;
    public currentKeyIndex$: BehaviorSubject<number> = new BehaviorSubject(this.currentKeyIndex);

    public numberOfKeys$: BehaviorSubject<number> = new BehaviorSubject(this.positionService.position$.value.keys.length);

    private key: Key = this.positionService.position$.value.keys[this.currentKeyIndex];
    public key$: BehaviorSubject<Key> = new BehaviorSubject(this.key);


    constructor(public positionService: PositionService) {
        this.positionService.position$.subscribe(
            (position) => {
                this.key = position.keys[this.currentKeyIndex];
                this.key$.next(this.key);
                this.numberOfKeys$.next(position.keys.length);
            }
        )
    }

    nextPosition(): boolean {
        this.currentKeyIndex$.next(++this.currentKeyIndex);

        if (this.currentKeyIndex >= this.positionService.position$.value.keys.length) {
            this.currentKeyIndex$.next(this.currentKeyIndex = 0);
            this.key = this.positionService.position$.value.keys[this.currentKeyIndex];

            this.key$.next(this.key);
            return false;
        }
        else {
            this.key = this.positionService.position$.value.keys[this.currentKeyIndex];
            this.key$.next(this.key);
            return true;
        }
    }

}
