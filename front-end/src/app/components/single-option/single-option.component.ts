import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-single-option',
    templateUrl: './single-option.component.html',
    styleUrls: ['./single-option.component.scss']
})

export class SingleOption implements OnInit {

    @Input()
    public caption: string="ceci est une description";
    constructor() { }
    
    ngOnInit(): void { }
    
}