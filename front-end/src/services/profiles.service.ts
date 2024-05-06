import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { PROFILE_LIST } from '../mocks/profile.mock';

@Injectable({
    providedIn: 'root'
})
export class ProfilesService {
    public profiles$: BehaviorSubject<Profile[]> = new BehaviorSubject(PROFILE_LIST);

    constructor() { }

    public filterProfiles(search: string): void {
        //search in the name and firstName or both at same time (name + firstName)
        const filteredProfiles = PROFILE_LIST.filter((profile: Profile) => {
            return profile.name.toLowerCase().includes(search.toLowerCase()) || profile.firstName.toLowerCase().includes(search.toLowerCase()) || (profile.name + ' ' + profile.firstName).toLowerCase().includes(search.toLowerCase()) || (profile.firstName + ' ' + profile.name).toLowerCase().includes(search.toLowerCase());
        });

        this.profiles$.next(filteredProfiles);  
    }

    public clearFilter(): void {
        this.profiles$.next(PROFILE_LIST);
    }

    public addProfile(profile: Profile): void {
        PROFILE_LIST.push(profile);
        this.profiles$.next(PROFILE_LIST);
    }
}