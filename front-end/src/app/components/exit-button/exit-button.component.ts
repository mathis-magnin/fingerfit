import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-exit-button',
    templateUrl: './exit-button.component.html',
    styleUrls: ['./exit-button.component.scss']
})

export class ExitButtonComponent implements OnInit {

    @Input()
    public link: string = '\home';

    @Input()
    public text?: string;

    constructor() {}
    ngOnInit(): void { }
    
}