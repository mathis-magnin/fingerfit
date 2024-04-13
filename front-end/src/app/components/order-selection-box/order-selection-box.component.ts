import { Component, Input } from '@angular/core';
import { Order, orderToString } from 'src/models/quiz.model';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-order-selection-box',
    templateUrl: './order-selection-box.component.html',
    styleUrls: ['./order-selection-box.component.scss']
})

export class OrderSelectionBoxComponent {

    public orderToString = orderToString;
    public orders: Order[] = [];

    @Input() boxStyle: BoxStyle = { width: '15vw', backgroundColor: 'lightblue' };

    constructor() {
        for (let order = Order.NOT_WORKED; order <= Order.FIFTH; order++) {
            this.orders.push(order);
        }
    }

}