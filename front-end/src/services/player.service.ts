import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
    providedIn: 'root'
})

export class PlayerService {
    
    public player$: BehaviorSubject<Profile | undefined> = new BehaviorSubject<Profile | undefined>(undefined);

    constructor() { }

    public setPlayer(player: Profile): void {
        this.player$.next(player);
    }
}