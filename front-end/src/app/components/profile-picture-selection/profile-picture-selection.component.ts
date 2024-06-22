import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { trigger, transition, query, style, stagger, animate, state } from '@angular/animations';
@Component({
    selector: 'app-profile-picture-selection',
    templateUrl: './profile-picture-selection.component.html',
    styleUrls: ['./profile-picture-selection.component.scss'],
    animations: [//fade 
        trigger('fade', [
            state('void', style({ opacity: 0 })),
            transition(':enter', [
                animate(300)
            ]),
        ])
    ]
})

export class ProfilePictureSelectionComponent implements OnInit {

    @Input() isDisabled: boolean = false;
    @Input() imgURL?: string;
    @Input() closeSelection?: boolean;
    public selectedProfilePicture: File | null = null;
    @Output() public profilePicture: EventEmitter<string> = new EventEmitter<string>();
    public displayChoice: boolean = false;
    public profilePictures: string[] = [ "../../../assets/profile-character/character1.png", "../../../assets/profile-character/character2.png", "../../../assets/profile-character/character3.png", "../../../assets/profile-character/character4.png", "../../../assets/profile-character/character5.png", "../../../assets/profile-character/character6.png", "../../../assets/profile-character/character7.png"]
    public randomProfilePicture?: string;
    constructor() { 

    }

    ngOnInit(): void { 
        if(!this.imgURL){
            this.randomProfilePicture = this.selectRandomProfilePicture();
            this.imgURL = this.randomProfilePicture;
            this.profilePicture.emit(this.imgURL);
        }
    }
    
    ngOnChanges(): void {
        if(this.closeSelection){
            this.displayChoice = false;
        }   
    }

    public selectRandomProfilePicture(): string {
        return this.profilePictures[Math.floor(Math.random() * this.profilePictures.length)];
    }

    public changeProfilePicture(): void {
        if (this.isDisabled) {
            return;
        }
        this.displayChoice = !this.displayChoice;
    }

    public selectProfilePicture(profilePicture: string): void {
        this.imgURL = profilePicture;
        this.profilePicture.emit(profilePicture);
        this.displayChoice = false;
    }
}