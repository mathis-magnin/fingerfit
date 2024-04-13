import { Component, Input } from '@angular/core';
import { Symbol, symbolToString } from 'src/models/quiz.model';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-key-selection-box',
    templateUrl: './key-selection-box.component.html',
    styleUrls: ['./key-selection-box.component.scss']
})
export class KeySelectionBoxComponent {

    public symbolToString = symbolToString;
    public symbols: Symbol[] = [];

    @Input() boxStyle: BoxStyle = new BoxStyle({});

    constructor() {
        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.symbols.push(symbol);
        }
    }

}