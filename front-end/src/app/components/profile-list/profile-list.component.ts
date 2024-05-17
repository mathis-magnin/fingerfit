import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Profile } from '../../../models/profile.model';
import { ButtonStyle } from 'src/models/style-input.model';
import { ProfilesService } from '../../../services/profiles.service';
import { Router } from '@angular/router';
import { PlayerService } from 'src/services/player.service';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.component.html',
    styleUrl: './profile-list.component.scss'
})

export class ProfileListComponent {

    public hasLeftNeighbor: boolean = true;
    public hasRightNeighbor: boolean = true;
    public start: number = 0;
    public profiles: Profile[] = [];
    public showProfiles: Profile[] = [];
    public currentProfile: Profile | undefined;
    public warning: boolean = false;

    @Input() public firstAndLastButtonStyle: ButtonStyle = new ButtonStyle({ width: '3vw', height: '6vh', backgroundColor: 'rgb(167, 165, 165)', borderRadius: '50%' });
    @Input() public middleButtonStyle: ButtonStyle = new ButtonStyle({ width: '8vw', height: '6vh' });

    constructor(public profilesService: ProfilesService,private router: Router,private playerService: PlayerService) {
        this.profilesService.profiles$.subscribe((profiles) => {
            this.profiles = profiles;
            this.start = Math.floor(this.profiles.length / 2);
            this.currentProfile = this.profiles[this.start];
            this.profilesShownInit();
        });
    }

    ngOnInit(): void {
    }

    public profilesShownInit() {
        this.hasLeftNeighbor = true;
        this.hasRightNeighbor = true;
        if (this.profiles.length > 3) {
            this.showProfiles = [this.profiles[this.start - 1], this.profiles[this.start], this.profiles[this.start + 1]];
        }
        else {
            this.showProfiles = this.profiles;
            if (this.profiles.length === 1) {
                this.hasLeftNeighbor = false;
                this.hasRightNeighbor = false;
            }
            if(this.profiles.length === 2) {
                this.hasRightNeighbor = false;
                this.hasLeftNeighbor = true;
            }
        }
    }

    public goLeft(): void {
        if (this.start > 1) {
            if (!this.hasRightNeighbor)
                this.hasRightNeighbor = true;
            this.start--;
            this.showProfiles = [this.profiles[this.start - 1], this.profiles[this.start], this.profiles[this.start + 1]];
        }
        else if (this.start > 0) {
            if (!this.hasRightNeighbor)
                this.hasRightNeighbor = true;
            this.start--;
            this.showProfiles = [this.profiles[this.start], this.profiles[this.start + 1]];
            this.hasLeftNeighbor = false;
        }
    }

    public goRight(): void {
        if (this.start < this.profiles.length - 2) {
            if (!this.hasLeftNeighbor)
                this.hasLeftNeighbor = true;
            this.start++;
            this.showProfiles = [this.profiles[this.start - 1], this.profiles[this.start], this.profiles[this.start + 1]];
        }
        else if (this.start < this.profiles.length - 1) {
            if (!this.hasLeftNeighbor)
                this.hasLeftNeighbor = true;
            this.start++;
            this.showProfiles = [this.profiles[this.start - 1], this.profiles[this.start]];
            this.hasRightNeighbor = false;
        }
    }

    public filterProfiles(event: any): void {
        console.log(event.target.value);
        this.profilesService.filterProfiles(event.target.value);
        this.profilesShownInit();

    }

    public checkProfileSelected(redirect:string): void {
        this.currentProfile = this.profiles[this.start];
        console.log(this.currentProfile);
        if (this.currentProfile===undefined) {
            this.warning = true;
        }
        else {
            this.playerService.setPlayer(this.currentProfile);
            this.router.navigate([redirect]);
        }
    }

}
