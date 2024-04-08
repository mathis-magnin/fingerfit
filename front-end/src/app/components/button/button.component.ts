import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

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

    @Output()
    buttonClicked: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}
    ngOnInit(): void { }

    onClick(): void {
        this.buttonClicked.emit();
    }
    
}