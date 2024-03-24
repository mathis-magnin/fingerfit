import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hand',
    templateUrl: './hand.component.html',
    styleUrl: './hand.component.scss'
})
export class HandComponent {

    @Input() public isLeft: boolean = false;

    @Input() public thumb: boolean = false;
    @Input() public indexFinger: boolean = false;
    @Input() public middleFinger: boolean = false;
    @Input() public ringFinger: boolean = false;
    @Input() public pinkyFinger: boolean = false;


    constructor() { }

}