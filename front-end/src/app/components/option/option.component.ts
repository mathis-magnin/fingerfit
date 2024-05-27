import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.scss']
})

export class OptionComponent implements OnInit {

    @Input() public caption: string = "ceci est une description";
    constructor() { }

    ngOnInit(): void { }

}