import { Component, Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

    @Input() isSelected: boolean = false;
    @Input() item: any = undefined;

    @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

    selected() {
        this.itemSelected.emit(this.item);
    }

}