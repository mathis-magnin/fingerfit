import { Component, Output, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile-picture-selection',
    templateUrl: './profile-picture-selection.component.html',
    styleUrls: ['./profile-picture-selection.component.scss']
})

export class ProfilePictureSelectionComponent implements OnInit {

    @Output()
    public selectedProfilePicture: File | null=null;
    public imgURL: string="../../../assets/default-profile-picture.png";
    constructor() { }

    ngOnInit(): void { }

    onUpload(event: any): void {
        this.selectedProfilePicture = event.target.files[0];
        if (this.selectedProfilePicture) {
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result as string;
                this.imgURL = imageData;
            };
            reader.readAsDataURL(this.selectedProfilePicture);
        }
    }

}