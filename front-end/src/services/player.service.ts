import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from '../configs/server.config';
import { GameMode, TimeMesure } from 'src/models/options.model';


@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    private userUrl = serverUrl + '/users';
    public player$: BehaviorSubject<Profile | undefined> = new BehaviorSubject<Profile | undefined>(undefined);

    constructor(private http: HttpClient) {
    }


    public setPlayer(player: Profile): void {
        this.player$.next(player);
    }


    public updateProfile(profile: Profile): void {
        console.log(profile);
        this.http.put<Profile>(this.userUrl + '/' + this.player$.value?.id, profile).subscribe((updatedProfile) => {
            this.player$.next(updatedProfile);
        });
    }


    public deleteProfile(): void {
        this.http.delete<Profile>(this.userUrl + '/' + this.player$.value?.id,).subscribe((deletedProfile) => {
            this.player$.next(deletedProfile);
        });
    }

}