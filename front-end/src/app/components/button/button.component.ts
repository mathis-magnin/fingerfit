import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

    @Input()
    public text?: string;

    @Input()
    public link?: string;

    @Input()
    public picture?: string;

    constructor() {}
    ngOnInit(): void { }
    
}