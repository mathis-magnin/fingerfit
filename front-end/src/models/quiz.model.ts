import { Position, Side } from "./position.model";
import { Symbol } from "./key.model";

export enum Order {
    NOT_WORKED = -1,
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
    FIFTH
}


export function orderToString(order: Order): string {
    switch (order) {
        case Order.FIRST:
            return "1";
        case Order.SECOND:
            return "2";
        case Order.THIRD:
            return "3";
        case Order.FOURTH:
            return "4";
        case Order.FIFTH:
            return "5";
        default:
            return "Non travaillé";
    }
}


export function stringToOrder(o: string): Order {
    switch (o) {
        case "1":
            return Order.FIRST;
        case "2":
            return Order.SECOND;
        case "3":
            return Order.THIRD;
        case "4":
            return Order.FOURTH;
        case "5":
            return Order.FIFTH;
        default:
            return Order.NOT_WORKED;
    }
}


export interface IsSymbolPressed {
    symbol: Symbol;
    isPressed: boolean;
}


export interface Quiz {
    id: number;
    name: string;
    positions: Position[];
    side: Side;
}