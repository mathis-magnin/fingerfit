import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-warning-popup',
    templateUrl: './warning-popup.component.html',
    styleUrls: ['./warning-popup.component.scss']
})

export class WarningPopupComponent implements OnInit {

    @Input()
    public text: string = "WARNING!";
    
    constructor() {}
        
    ngOnInit(): void { }
    
}