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

    lightenColor(color: string, percent: number): string {
        // Convertir la couleur hexadécimale en RGB
        const num = parseInt(color.replace('#', ''), 16);
        const r = (num >> 16) + Math.round(2.55 * percent);
        const g = (num >> 8 & 0x00FF) + Math.round(2.55 * percent);
        const b = (num & 0x0000FF) + Math.round(2.55 * percent);
    
        // Assurer que les valeurs sont dans la plage 0-255
        const newColor = (0x1000000 + 
                          (r < 255 ? (r < 1 ? 0 : r) : 255) * 0x10000 + 
                          (g < 255 ? (g < 1 ? 0 : g) : 255) * 0x100 + 
                          (b < 255 ? (b < 1 ? 0 : b) : 255)).toString(16).slice(1);
    
        return `#${newColor}`;
    }

    getStyle() {
        console.log('couleur à afficher : ' + this.color);
        if (this.color) 
            //return {border: '5px solid ' + this.color};
            return {backgroundColor: this.color}
        return {};
        //return {border: '5px solid gainsboro'};
    }

}