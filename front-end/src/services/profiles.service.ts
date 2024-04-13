import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../models/profile.model';
import { PROFILE_LIST } from '../mocks/profile.mock';

@Injectable({
    providedIn: 'root'
})
export class profilesService {
    public profiles$: BehaviorSubject<Profile[]> = new BehaviorSubject(PROFILE_LIST);

    constructor() { }

    public filterProfiles(search: string): void {
        const filteredProfiles: Profile[] = PROFILE_LIST.filter((profile) => profile.name.toLowerCase().includes(search.toLowerCase()));
        this.profiles$.next(filteredProfiles);  
    }

    public clearFilter(): void {
        this.profiles$.next(PROFILE_LIST);
    }
}