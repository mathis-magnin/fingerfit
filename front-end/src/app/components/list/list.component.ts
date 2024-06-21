import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Side, sideToString } from 'src/models/position.model';
import { ListStyle } from 'src/models/style-input.model';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {

    public firstInitialization: boolean = true;
    public ones: any[] = [];
    public selectedOnes: any[] = [];
    public filters: string[] = [];
    public colorMap: Map<any, string> = new Map<any, string>();


    @Input() public style: ListStyle = { height: "60vh" };
    @Input() set items(items: any[]) {
        if (this.firstInitialization && (0 < items.length)) {
            this.filters = (items[0].keys) ? ["Filtrer", sideToString(Side.LEFT), sideToString(Side.RIGHT)] : ["Filtrer", sideToString(Side.LEFT), sideToString(Side.RIGHT), sideToString(Side.BOTH)];
            this.firstInitialization = false;
        }
        this.ones = items;
    }
    @Input() set alreadySelectedItems(items: any[]) {
        /* Avoiding giving items that are not in the list */
        this.selectedOnes = [];
        for (let item of this.ones) {
            if (items.find((e) => (e.id === item.id))) {
                this.selectedOnes.push(item);
            }
        }
    }
    @Input() public multipleChoice: boolean = false;
    @Input() public text: string = "Sélectionner un élément";
    @Input() public colors: string[] = [];


    @Output() public selectedItems: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output() public selectedFilter: EventEmitter<string> = new EventEmitter<string>();
    @Output() public searchValue: EventEmitter<string> = new EventEmitter<string>();

    //ngOnchange
    ngOnChanges() {
        this.updateColorMap();
    }


    search(event: any) {
        this.searchValue.emit(event.target.value);
    }


    filter(filter: string) {
        this.selectedFilter.emit(filter);
    }


    select(item: any) {
        /* Removing the item from the list if it was already selected */
        for (let i = 0; i < this.selectedOnes.length; i++) {
            if (this.selectedOnes[i] == item) {
                this.selectedOnes.splice(i, 1);
                this.selectedItems.emit(this.selectedOnes);
                return;
            }
        }

        /* Adding the item to the list */
        if (this.multipleChoice) {
            this.selectedOnes.push(item);
        }
        /* Replacing the item from the list */
        else {
            this.selectedOnes = [item];
        }
        this.selectedItems.emit(this.selectedOnes);
    }

    updateColorMap() {
        let map: Map<any, string> = new Map<any, string>();
        for (let i = 0; i < Math.min(this.selectedOnes.length, this.colors.length); i++) {
            map.set(this.selectedOnes[i].id, this.colors[i]);
        }
        this.colorMap = map;
    }
}