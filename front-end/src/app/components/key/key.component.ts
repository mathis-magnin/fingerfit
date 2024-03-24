import { Component, Input } from '@angular/core';
import { Finger } from '../../../models/finger.model';

@Component({
    selector: 'app-key',
    templateUrl: './key.component.html',
    styleUrls: ['./key.component.scss']
})
export class KeyComponent {

    @Input() public label: string = '';

    @Input() public isSpaceKey: boolean = false;

    Finger = Finger; // To use enum in html
    @Input() public finger: Finger = Finger.UNDEFINED;

    constructor() { }
}