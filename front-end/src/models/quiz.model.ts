export enum Finger {
    UNDEFINED = -1,
    THUMB,
    INDEX,
    MIDDLE,
    RING,
    PINKY
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


export interface Key {
    symbol: Symbol;
    finger: Finger;
}

export interface Position {
    keys: Key[];
}

export interface Quiz {
    name: string;
    positions: Position[];
}