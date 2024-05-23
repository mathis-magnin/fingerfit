import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

    @Input() public options: string[] = [];
    @Input() public defaultOption: string = "";

    @Output() public selectedOption: EventEmitter<string> = new EventEmitter<string>();


    select(option: string) {
        this.selectedOption.emit(option);
    }

}