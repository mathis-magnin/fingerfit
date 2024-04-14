export enum Finger {
    UNDEFINED = -1,
    THUMB,
    INDEX,
    MIDDLE,
    RING,
    PINKY
}

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
            return "Non défini";
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

export enum Symbol {
    UNDEFINED = -1,
    A,
    Z,
    E,
    R,
    T,
    Y,
    U,
    I,
    O,
    P,
    Q,
    S,
    D,
    F,
    G,
    H,
    J,
    K,
    L,
    M,
    W,
    X,
    C,
    V,
    B,
    N,
    QUESTION_MARK,
    POINT,
    SLASH,
    SECTION_MARK,
    SPACE
}

export function symbolToString(symbol: Symbol): string {
    switch (symbol) {
        case Symbol.UNDEFINED:
            return "";
        case Symbol.QUESTION_MARK:
            return "?";
        case Symbol.POINT:
            return ".";
        case Symbol.SLASH:
            return "/";
        case Symbol.SECTION_MARK:
            return "§";
        case Symbol.SPACE:
            return "ESPACE";
        default:
            return Symbol[symbol];
    }
}


export function stringToSymbol(s: string): Symbol {
    switch (s) {
        case "A":
            return Symbol.A;
        case "Z":
            return Symbol.Z;
        case "E":
            return Symbol.E;
        case "R":
            return Symbol.R;
        case "T":
            return Symbol.T;
        case "Y":
            return Symbol.Y;
        case "U":
            return Symbol.U;
        case "I":
            return Symbol.I;
        case "O":
            return Symbol.O;
        case "P":
            return Symbol.P;
        case "Q":
            return Symbol.Q;
        case "S":
            return Symbol.S;
        case "D":
            return Symbol.D;
        case "F":
            return Symbol.F;
        case "G":
            return Symbol.G;
        case "H":
            return Symbol.H;
        case "J":
            return Symbol.J;
        case "K":
            return Symbol.K;
        case "L":
            return Symbol.L;
        case "M":
            return Symbol.M;
        case "W":
            return Symbol.W;
        case "X":
            return Symbol.X;
        case "C":
            return Symbol.C;
        case "V":
            return Symbol.V;
        case "B":
            return Symbol.B;
        case "N":
            return Symbol.N;
        case ",":
        case "?":
            return Symbol.QUESTION_MARK;
        case ";":
        case ".":
            return Symbol.POINT;
        case ":":
        case "/":
            return Symbol.SLASH;
        case "!":
        case "§":
            return Symbol.SECTION_MARK;
        case " ":
        case "ESPACE":
            return Symbol.SPACE;
        default:
            return Symbol.UNDEFINED;
    }
}

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


export interface Key {
    symbol: Symbol;
    finger: Finger;
}


export interface Position {
    keys: Key[];
    side: Side.LEFT | Side.RIGHT;
}


export interface Quiz {
    name: string;
    positions: Position[];
    side: Side;
}