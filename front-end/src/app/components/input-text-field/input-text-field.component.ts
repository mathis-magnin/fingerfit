import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-input-text-field',
    templateUrl: './input-text-field.component.html',
    styleUrls: ['./input-text-field.component.scss']
})

export class InputTextFieldComponent implements OnInit {
    @Input()
    public label?: string;
    @Input() isDisabled: boolean = false;
    @Input() preset?: string;
    
    public value: string = '';
    @Output()
    public valueChange = new EventEmitter<string>();
    
    constructor() { }

    ngOnInit(): void { }
    

    updateValue(event: any): void {
        this.value = event.target.value;
        this.valueChange.emit(this.value);
    }
}