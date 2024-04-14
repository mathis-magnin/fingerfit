import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order, Position, Symbol, Finger, Key, orderToString, Side } from 'src/models/quiz.model';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-position-description-tab',
    templateUrl: './position-description-tab.component.html',
    styleUrls: ['./position-description-tab.component.scss']
})

export class PositionDescriptionTabComponent {

    public boxStyle: BoxStyle = new BoxStyle({ width: '5vw', backgroundColor: 'cornflowerblue' });
    public fingerBoxStyle: BoxStyle = new BoxStyle({ width: '10vw', backgroundColor: 'lightblue' });
    public selectionBoxStyle: BoxStyle = new BoxStyle({ width: '10vw', backgroundColor: 'antiquewhite' });

    private thumbKey: Key = { symbol: Symbol.UNDEFINED, finger: Finger.THUMB };
    private thumbOrder: Order = Order.NOT_WORKED;

    private indexKey: Key = { symbol: Symbol.UNDEFINED, finger: Finger.INDEX };
    private indexOrder: Order = Order.NOT_WORKED;

    private middleKey: Key = { symbol: Symbol.UNDEFINED, finger: Finger.MIDDLE };
    private middleOrder: Order = Order.NOT_WORKED;

    private ringKey: Key = { symbol: Symbol.UNDEFINED, finger: Finger.RING };
    private ringOrder: Order = Order.NOT_WORKED;

    private pinkyKey: Key = { symbol: Symbol.UNDEFINED, finger: Finger.PINKY };
    private pinkyOrder: Order = Order.NOT_WORKED;

    private keyDictionary: { [id: string]: Key[] } = {
        [orderToString(Order.NOT_WORKED)]: [],
        [orderToString(Order.FIRST)]: [],
        [orderToString(Order.SECOND)]: [],
        [orderToString(Order.THIRD)]: [],
        [orderToString(Order.FOURTH)]: [],
        [orderToString(Order.FIFTH)]: []
    };

    private positionKeys: Key[] = [];

    @Input()
    set createPosition(is_to_do : boolean) { // s'exécute à chaque fois que l'input change
        if (is_to_do) {
            for(let order = Order.NOT_WORKED; order <= Order.FIFTH; order++) {
                if(this.thumbOrder === order) {
                    this.keyDictionary[orderToString(order)].push(this.thumbKey);
                }
                if(this.indexOrder === order) {
                    this.keyDictionary[orderToString(order)].push(this.indexKey);
                }
                if(this.middleOrder === order) {
                    this.keyDictionary[orderToString(order)].push(this.middleKey);
                }
                if(this.ringOrder === order) {
                    this.keyDictionary[orderToString(order)].push(this.ringKey);
                }
                if(this.pinkyOrder === order) {
                    this.keyDictionary[orderToString(order)].push(this.pinkyKey);
                }
            }
            for(let order = Order.FIRST; order <= Order.FIFTH; order++) {
                this.positionKeys = this.positionKeys.concat(this.keyDictionary[orderToString(order)]);
            }
            this.positionDescription.emit(this.positionKeys);
        }
    }

    @Output() public positionDescription: EventEmitter<Key[]> = new EventEmitter<Key[]>();

    constructor() { }
    
    public onThumbSymbolSelected(symbol: Symbol) {
        this.thumbKey = { symbol: symbol, finger: Finger.THUMB };
    }

    public onThumbOrderSelected(order: Order) {
        this.thumbOrder = order;
    }

    public onIndexSymbolSelected(symbol: Symbol) {
        this.indexKey = { symbol: symbol, finger: Finger.INDEX };
    }

    public onIndexOrderSelected(order: Order) {
        this.indexOrder = order;
    }

    public onMiddleSymbolSelected(symbol: Symbol) {
        this.middleKey = { symbol: symbol, finger: Finger.MIDDLE };
    }

    public onMiddleOrderSelected(order: Order) {
        this.middleOrder = order;
    }

    public onRingSymbolSelected(symbol: Symbol) {
        this.ringKey = { symbol: symbol, finger: Finger.RING };
    }

    public onRingOrderSelected(order: Order) {
        this.ringOrder = order;
    }

    public onPinkySymbolSelected(symbol: Symbol) {
        this.pinkyKey = { symbol: symbol, finger: Finger.PINKY };
    }

    public onPinkyOrderSelected(order: Order) {
        this.pinkyOrder = order;
    }

}