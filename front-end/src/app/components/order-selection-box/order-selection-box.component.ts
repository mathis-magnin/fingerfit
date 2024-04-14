import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order, orderToString, stringToOrder } from 'src/models/quiz.model';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-order-selection-box',
    templateUrl: './order-selection-box.component.html',
    styleUrls: ['./order-selection-box.component.scss']
})

export class OrderSelectionBoxComponent {

    public orderToString = orderToString;
    public orders: Order[] = [];

    public selectedOrder: Order = Order.NOT_WORKED;

    @Input() boxStyle: BoxStyle = new BoxStyle({});

    @Output() orderSelected: EventEmitter<Order> = new EventEmitter<Order>();

    constructor() {
        for (let order = Order.NOT_WORKED; order <= Order.FIFTH; order++) {
            this.orders.push(order);
        }
    }

    public onSelect(o: string) {
        this.selectedOrder = stringToOrder(o);
        console.log(this.selectedOrder);
        this.orderSelected.emit(this.selectedOrder);
    }

}