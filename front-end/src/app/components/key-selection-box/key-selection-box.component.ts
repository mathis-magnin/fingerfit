import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Symbol, stringToSymbol, symbolToString } from 'src/models/key.model';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-key-selection-box',
    templateUrl: './key-selection-box.component.html',
    styleUrls: ['./key-selection-box.component.scss']
})
export class KeySelectionBoxComponent {

    public symbolToString = symbolToString;
    public symbols: Symbol[] = [];

    public selectedSymbol: Symbol = Symbol.UNDEFINED;

    @Input() boxStyle: BoxStyle = new BoxStyle({});

    @Output() symbolSelected: EventEmitter<Symbol> = new EventEmitter<Symbol>();

    constructor() {
        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.symbols.push(symbol);
        }
    }

    public onSelect(s: string) {
        this.selectedSymbol = stringToSymbol(s);
        console.log(this.selectedSymbol);
        this.symbolSelected.emit(this.selectedSymbol);
    }

}