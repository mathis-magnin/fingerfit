import { Component, Output, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-input-text-field',
    templateUrl: './input-text-field.component.html',
    styleUrls: ['./input-text-field.component.scss']
})

export class InputTextFieldComponent implements OnInit {
    @Input()
    public label?: string;

    @Output()
    public value: string = '';
    constructor() { }

    ngOnInit(): void { }
    

    updateValue(event: any): void {
        this.value = event.target.value;
    }
}