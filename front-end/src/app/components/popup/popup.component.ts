import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrl: './popup.component.scss'
})
export class PopupComponent {


    @Output()
    exit: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }
    
    public onExit() {
        this.exit.emit(true);
    }

}