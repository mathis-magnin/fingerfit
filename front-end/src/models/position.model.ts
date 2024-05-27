import { Key } from './key.model';

export enum Side {
    UNDEFINED = -1,
    LEFT,
    RIGHT,
    BOTH
}


export function sideToString(side: Side): string {
    switch (side) {
        case Side.LEFT:
            return "Main gauche";
        case Side.RIGHT:
            return "Main droite";
        case Side.BOTH:
            return "Deux mains";
        default:
            return "Non définie";
    }
}


export function stringToSide(s: string): Side {
    switch (s) {
        case "Main gauche":
            return Side.LEFT;
        case "Main droite":
            return Side.RIGHT;
        case "Deux mains":
            return Side.BOTH;
        default:
            return Side.UNDEFINED;
    }
}


export interface Position {
    keys: Key[];
    side: Side.LEFT | Side.RIGHT;
}