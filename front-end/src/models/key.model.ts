export enum Finger {
    UNDEFINED = -1,
    THUMB,
    INDEX,
    MIDDLE,
    RING,
    PINKY
}


export function fingerToString(finger: Finger): string {
    switch (finger) {
        case Finger.THUMB:
            return "Pouce";
        case Finger.INDEX:
            return "Index";
        case Finger.MIDDLE:
            return "Majeur";
        case Finger.RING:
            return "Annulaire";
        case Finger.PINKY:
            return "Auriculaire";
        default:
            return "Indéfini";
    }
}


export function stringToFinger(str: string) {
    switch (str) {
        case "Pouce":
            return Finger.THUMB;
        case "Index":
            return Finger.INDEX;
        case "Majeur":
            return Finger.MIDDLE;
        case "Annulaire":
            return Finger.RING;
        case "Auriculaire":
            return Finger.PINKY;
        default:
            return Finger.UNDEFINED;
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


export interface Key {
    symbol: Symbol;
    finger: Finger;
}