import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Position, Quiz } from 'src/models/quiz.model';
import { ListStyle } from 'src/models/style-input.model';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {

    @Input() public style: ListStyle = { height: "60vh" };

    @Input() public items: (Quiz | Position)[] = [];
    @Input() public selectedOnes: (Quiz | Position)[] = [];
    @Input() public multipleChoice: boolean = false;
    @Input() public text: string = "Sélectionner un élément";
    @Input() public filters: string[] = [];
    @Input() public defaultFilter: string = "";

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
        /* Removing the item from the list if he was already selected */
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
        else {
            this.selectedOnes = [item];
        }
        this.selectedItems.emit(this.selectedOnes);
    }

}