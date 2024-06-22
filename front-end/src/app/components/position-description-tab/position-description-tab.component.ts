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
    };

    @Output() public keysDescribed: EventEmitter<Key[]> = new EventEmitter<Key[]>();

    Order = Order;
    fingerToString = fingerToString;
    public fingers: Finger[] = [];
    public labelBoxStyle: BoxStyle = new BoxStyle({ width: '3.75vw', backgroundColor: 'cornflowerblue' });
    public fingerBoxStyle: BoxStyle = new BoxStyle({ width: '7.5vw', backgroundColor: 'lightblue' });
    public selectorBoxStyle: BoxStyle = new BoxStyle({ width: '7.5vw', backgroundColor: 'antiquewhite' });

    public symbolOnFinger: Symbol[] = [];
    public allSymbols: string[] = [];
    public symbolsDefaultValueOnFinger: string[] = [];

    public orderOnFinger: Order[] = [];
    public allOrders: string[] = [];
    public ordersDefaultValueOnFinger: string[] = [];


    constructor() {
        for (let finger = Finger.THUMB; finger <= Finger.PINKY; finger++) {
            this.fingers.push(finger);
        }

        for (let symbol = Symbol.A; symbol <= Symbol.SPACE; symbol++) {
            this.allSymbols.push(symbolToString(symbol));
        }

        for (let order = Order.NOT_WORKED; order <= Order.FIFTH; order++) {
            this.allOrders.push(orderToString(order));
        }

        for (let i = 0; i < 5; i++) {
            this.symbolsDefaultValueOnFinger.push(symbolToString(i));
            this.ordersDefaultValueOnFinger.push(orderToString(Order.NOT_WORKED));
            this.orderOnFinger.push(Order.NOT_WORKED);
            this.symbolOnFinger.push(i);
        }
    }
  
    
    public avoidDuplicatedSymbol(finger: Finger, fingerPreviousSymbol: Symbol): void {
        for(let f = Finger.THUMB; f <= Finger.PINKY; f++) {
            if((f != finger) && (this.symbolOnFinger[f] == this.symbolOnFinger[finger])) {
                this.symbolOnFinger[f] = fingerPreviousSymbol;
                this.symbolsDefaultValueOnFinger[f] = symbolToString(fingerPreviousSymbol);
            }
        }
    }


    public avoidDuplicatedOrder(finger: Finger, fingerPreviousOrder: Order): void {
        for(let f = Finger.THUMB; f <= Finger.PINKY; f++) {
            if((f != finger) && (this.orderOnFinger[f] == this.orderOnFinger[finger])) {
                this.orderOnFinger[f] = fingerPreviousOrder;
                this.ordersDefaultValueOnFinger[f] = orderToString(fingerPreviousOrder);
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
        let fingerPreviousOrder = this.orderOnFinger[finger];
        if (fingerPreviousOrder == Order.NOT_WORKED) {
            do {
                fingerPreviousOrder++;                
            } while (this.orderOnFinger.includes(fingerPreviousOrder));
        }
        this.orderOnFinger[finger] = stringToOrder(order);
        this.ordersDefaultValueOnFinger[finger] = order;
        if (this.orderOnFinger[finger] != Order.NOT_WORKED) {
            this.avoidDuplicatedOrder(finger, fingerPreviousOrder);
        }
        this.emit();
    }


    public updateSymbol(finger: Finger, symbol: string) {
        let fingerPreviousSymbol = this.symbolOnFinger[finger];
        this.symbolOnFinger[finger] = stringToSymbol(symbol);
        this.symbolsDefaultValueOnFinger[finger] = symbol;
        if (this.orderOnFinger[finger] == Order.NOT_WORKED) {
            let availableOrder = Order.FIRST;
            while (this.orderOnFinger.includes(availableOrder)) {
                availableOrder++;
            }
            this.ordersDefaultValueOnFinger[finger] = orderToString(availableOrder);
            this.orderOnFinger[finger] = availableOrder;
        }
        this.avoidDuplicatedSymbol(finger, fingerPreviousSymbol);
        this.emit();
    }

}