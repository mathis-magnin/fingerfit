import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-profile-picture-selection',
    templateUrl: './profile-picture-selection.component.html',
    styleUrls: ['./profile-picture-selection.component.scss']
})

export class ProfilePictureSelectionComponent implements OnInit {

    public selectedProfilePicture: File | null = null;
    @Output()
    public profilePicture: EventEmitter<string> = new EventEmitter<string>();
    
    public imgURL: string="../../../assets/default-profile-picture.png";
    constructor() { }

    ngOnInit(): void { }

    onUpload(event: any): void {
        this.selectedProfilePicture = event.target.files[0];
        console.log(this.selectedProfilePicture);
        if (this.selectedProfilePicture) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result as string;
                this.imgURL = imageData;
                this.profilePicture.emit(this.imgURL);
            };
            reader.readAsDataURL(this.selectedProfilePicture);
        }
    }

}