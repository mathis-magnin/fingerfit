import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-exit-button',
    templateUrl: './exit-button.component.html',
    styleUrls: ['./exit-button.component.scss']
})

export class ExitButtonComponent implements OnInit {

    @Input()
    public text: string = 'Exit';

    @Input()
    public link: string = '\home';

    constructor() {}
    ngOnInit(): void { }
    
}