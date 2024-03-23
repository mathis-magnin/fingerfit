import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

    @Input()
    public text: string = 'Button';

    @Input()
    public link: string = '\home';

    @Input()
    public picture?: string;

    constructor() {}
    ngOnInit(): void { }
    
}