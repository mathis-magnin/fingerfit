import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-key',
    templateUrl: './key.component.html',
    styleUrls: ['./key.component.scss']
})
export class KeyComponent {

    @Input()
    public label: string = '';

    @Input()
    public isSpaceKey: boolean = false;

    constructor() { }
}