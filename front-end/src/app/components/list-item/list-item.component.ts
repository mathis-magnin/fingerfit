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
    @Input() color: string | undefined = "";

    @Output() selectedItem: EventEmitter<any> = new EventEmitter<any>();


    clicked() {
        this.selectedItem.emit(this.item);
    }

    getStyle() {
        console.log('couleur à afficher : ' + this.color);
        if (this.color) 
            return {border: '5px solid ' + this.color};
        return {border: '5px solid gainsboro'};
    }

}