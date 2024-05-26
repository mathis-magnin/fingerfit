import { Component, Output, EventEmitter, Input } from '@angular/core';
import { first } from 'rxjs';
import { Position, Quiz, Side, sideToString } from 'src/models/quiz.model';
import { ListStyle } from 'src/models/style-input.model';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {

    public firstInitialization: boolean = true;
    public ones: any[] = [];
    public filters: string[] = [];


    @Input() public style: ListStyle = { height: "60vh" };
    @Input() set items(items: any[]) {
        if (this.firstInitialization && (0 < items.length)) {
            this.filters = (items[0].keys) ? ["Filtrer", sideToString(Side.LEFT), sideToString(Side.RIGHT)] : ["Filtrer", sideToString(Side.LEFT), sideToString(Side.RIGHT), sideToString(Side.BOTH)];
            this.firstInitialization = false;
        }
        this.ones = items;
    }
    @Input() public selectedOnes: any[] = [];
    @Input() public multipleChoice: boolean = false;
    @Input() public text: string = "Sélectionner un élément";


    @Output() public selectedItems: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output() public selectedFilter: EventEmitter<string> = new EventEmitter<string>();
    @Output() public searchValue: EventEmitter<string> = new EventEmitter<string>();


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

}