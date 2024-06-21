import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { HttpClient } from '@angular/common/http';
import { serverUrl, httpOptionsBase } from '../configs/server.config';

@Injectable({
    providedIn: 'root'
})

export class ProfilesService {

    private profiles: Profile[] = [];
    public profiles$: BehaviorSubject<Profile[]> = new BehaviorSubject(this.profiles);
    private userUrl = serverUrl + '/users';
    private httpOptions = httpOptionsBase;


    constructor(private http: HttpClient) {
        this.fetchProfiles();
    }


    public fetchProfiles(): void {
        this.http.get<Profile[]>(this.userUrl).subscribe((userList) => {
            this.profiles = userList;
            this.profiles$.next(this.profiles);
        });
    }


    public addProfile(profile: Profile): void {
        this.http.post<Profile>(this.userUrl, profile, this.httpOptions).subscribe((newProfile) => {
            this.fetchProfiles();
        });
    }


    public filterProfiles(search: string): void {
        //search in the name and firstName or both at same time (name + firstName)
        const filteredProfiles = this.profiles.filter((profile: Profile) => {
            return profile.name.toLowerCase().includes(search.toLowerCase()) || profile.firstName.toLowerCase().includes(search.toLowerCase()) || (profile.name + ' ' + profile.firstName).toLowerCase().includes(search.toLowerCase()) || (profile.firstName + ' ' + profile.name).toLowerCase().includes(search.toLowerCase());
        });

        this.profiles$.next(filteredProfiles);
    }


    public clearFilter(): void {
        this.profiles$.next(this.profiles);
    }

}