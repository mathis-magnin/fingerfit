import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Profile } from '../../../models/profile.model';

@Component({
selector: 'app-profile',
templateUrl: './profile.component.html',
styleUrl: './profile.component.scss'
})

export class ProfileComponent {

    @Input()
    public profile: Profile | undefined;
    constructor() { }

    ngOnInit(): void {
    }
}
