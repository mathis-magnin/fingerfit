import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Finger, Key, Symbol, fingerToString, stringToSymbol, symbolToString } from 'src/models/key.model';
import { Order, orderToString, stringToOrder } from 'src/models/quiz.model';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-position-description-tab',
    templateUrl: './position-description-tab.component.html',
    styleUrls: ['./position-description-tab.component.scss']
})

export class PositionDescriptionTabComponent {

    @Input() set keys(keys: Key[]) {
        /* Reinitialize all */
        for (let i = 0; i < 5; i++) {
            this.symbolsDefaultValueOnFinger[i] = symbolToString(i);
            this.ordersDefaultValueOnFinger[i] = orderToString(Order.NOT_WORKED);
            this.orderOnFinger[i] = Order.NOT_WORKED;
            this.symbolOnFinger[i] = i;
        }

        /* Updating all */
        for (let i = 0; i < keys.length; i++) {
            this.symbolOnFinger[keys[i].finger] = keys[i].symbol;
            this.orderOnFinger[keys[i].finger] = i;

            this.symbolsDefaultValueOnFinger[keys[i].finger] = symbolToString(keys[i].symbol);
            this.ordersDefaultValueOnFinger[keys[i].finger] = orderToString(i);
        }
        this.updateSelectors();
    };

    @Output() public keysDescribed: EventEmitter<Key[]> = new EventEmitter<Key[]>();

    Order = Order;
    fingerToString = fingerToString;
    public fingers: Finger[] = [];
    public labelBoxStyle: BoxStyle = new BoxStyle({ width: '3.75vw', backgroundColor: 'cornflowerblue' });
    public fingerBoxStyle: BoxStyle = new BoxStyle({ width: '7.5vw', backgroundColor: 'lightblue' });
    public selectorBoxStyle: BoxStyle = new BoxStyle({ width: '7.5vw', backgroundColor: 'antiquewhite' });

    public symbolOnFinger: Symbol[] = [];
    public symbolsDefaultValueOnFinger: string[] = [];
    public symbolsPossibilitiesOnFinger: string[][] = [];

    public orderOnFinger: Order[] = []
    public ordersDefaultValueOnFinger: string[] = [];
    public ordersPossibilitiesOnFinger: string[][] = [];


    constructor() {
        for (let finger = Finger.THUMB; finger <= Finger.PINKY; finger++) {
            this.fingers.push(finger);
        }

        for (let i = 0; i < 5; i++) {
            this.symbolsDefaultValueOnFinger.push(symbolToString(i));
            this.ordersDefaultValueOnFinger.push(orderToString(Order.NOT_WORKED));
            this.symbolsPossibilitiesOnFinger.push([]);
            this.ordersPossibilitiesOnFinger.push([]);
            this.orderOnFinger.push(Order.NOT_WORKED);
            this.symbolOnFinger.push(i);
        }
    }


    public updateSelectors() {
        this.symbolsPossibilitiesOnFinger = [[], [], [], [], []];
        this.ordersPossibilitiesOnFinger = [[], [], [], [], []];

        for (let finger = Finger.THUMB; finger <= Finger.PINKY; finger++) {
            /* Symbols possibilities */
            for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
                if ((this.symbolOnFinger[finger] == symbol) || !this.symbolOnFinger.includes(symbol)) {
                    this.symbolsPossibilitiesOnFinger[finger].push(symbolToString(symbol));
                }
            }

            /* Orders possibilities */
            for (let order = Order.NOT_WORKED; order <= Order.FIFTH; order++) {
                if ((order == Order.NOT_WORKED) || (this.orderOnFinger[finger] == order) || !this.orderOnFinger.includes(order)) {
                    this.ordersPossibilitiesOnFinger[finger].push(orderToString(order));
                }
            }
        }
    }


    public emit() {
        let keysToEmit: Key[] = [];
        for (let order = Order.FIRST; order <= Order.FIFTH; order++) {
            for (let finger = Finger.THUMB; finger <= Finger.PINKY; finger++) {
                if (this.orderOnFinger[finger] == order) {
                    keysToEmit.push({ symbol: this.symbolOnFinger[finger], finger: finger });
                }
            }
        }
        this.keysDescribed.emit(keysToEmit);
    }


    public updateOrder(finger: Finger, order: string) {
        this.orderOnFinger[finger] = stringToOrder(order);
        this.emit();
        this.updateSelectors();
    }


    public updateSymbol(finger: Finger, symbol: string) {
        this.symbolOnFinger[finger] = stringToSymbol(symbol);
        this.emit();
        this.updateSelectors();
    }

}