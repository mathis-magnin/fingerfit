import { Finger, Symbol, Position, Quiz,Side } from '../models/quiz.model';

export const FIRST_POSITION: Position = {
    keys: [
        {
            symbol: Symbol.SPACE,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.S,
            finger: Finger.INDEX
        },
        {
            symbol: Symbol.Y,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.K,
            finger: Finger.RING
        }
    ]
};

export const SECOND_POSITION: Position = {
    keys: [
        {
            symbol: Symbol.T,
            finger: Finger.PINKY
        },
        {
            symbol: Symbol.B,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.E,
            finger: Finger.RING
        },
        {
            symbol: Symbol.Z,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.Q,
            finger: Finger.INDEX
        }
    ]
};

export const THIRD_POSITION: Position = {
    keys: [
        {
            symbol: Symbol.C,
            finger: Finger.PINKY
        },
        {
            symbol: Symbol.X,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.F,
            finger: Finger.RING
        },
        {
            symbol: Symbol.H,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.SPACE,
            finger: Finger.INDEX
        }
    ]
};

export const FOURTH_POSITION: Position = {
    keys: [
        {
            symbol: Symbol.M,
            finger: Finger.PINKY
        },
        {
            symbol: Symbol.SPACE,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.U,
            finger: Finger.RING
        },
        {
            symbol: Symbol.T,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.G,
            finger: Finger.INDEX
        }
    ]
};

export const FIFTH_POSITION: Position = {
    keys: [
        {
            symbol: Symbol.QUESTION_MARK,
            finger: Finger.PINKY
        },
        {
            symbol: Symbol.D,
            finger: Finger.INDEX
        },
        {
            symbol: Symbol.B,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.T,
            finger: Finger.RING
        }
    ]
};

export const SIXTH_POSITION: Position = {
    keys: [
        {
            symbol: Symbol.J,
            finger: Finger.PINKY
        },
        {
            symbol: Symbol.C,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.T,
            finger: Finger.RING
        },
        {
            symbol: Symbol.R,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.D,
            finger: Finger.INDEX
        }
    ]
};

export const SEVENTH_POSITION: Position = {
    keys: [
        {
            symbol: Symbol.L,
            finger: Finger.PINKY
        },
        {
            symbol: Symbol.N,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.U,
            finger: Finger.RING
        },
        {
            symbol: Symbol.G,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.S,
            finger: Finger.INDEX
        }
    ]
};

export const EIGHTH_POSITION: Position = {
    keys: [
        {
            symbol: Symbol.U,
            finger: Finger.PINKY
        },
        {
            symbol: Symbol.J,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.T,
            finger: Finger.RING
        },
        {
            symbol: Symbol.S,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.X,
            finger: Finger.INDEX
        }
    ]
};

export const NINTH_POSITION: Position = {
    keys: [
        {
            symbol: Symbol.L,
            finger: Finger.PINKY
        },
        {
            symbol: Symbol.V,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.U,
            finger: Finger.RING
        },
        {
            symbol: Symbol.G,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.S,
            finger: Finger.INDEX
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'HELLO',
        positions: [SIXTH_POSITION, FOURTH_POSITION, SECOND_POSITION],
        side: Side.RIGHT,
    },
    {
        name: 'WORLD',
        positions: [FIFTH_POSITION, SEVENTH_POSITION, FOURTH_POSITION, FIRST_POSITION, EIGHTH_POSITION],
        side: Side.LEFT,
    },
    {
        name: 'ESSAI',
        positions: [SEVENTH_POSITION, SIXTH_POSITION, FOURTH_POSITION, SEVENTH_POSITION],
        side: Side.LEFT,
    },
    {
        name: 'PEUTETRE',
        positions: [FIRST_POSITION, SEVENTH_POSITION, EIGHTH_POSITION, SIXTH_POSITION],
        side: Side.LEFT,
    },
    {
        name: 'BONJOUR',
        positions: [FIFTH_POSITION, EIGHTH_POSITION, FOURTH_POSITION],
        side: Side.RIGHT,
    },
    {
        name: 'BANANA',
        positions: [FOURTH_POSITION, NINTH_POSITION, EIGHTH_POSITION, THIRD_POSITION],
        side: Side.LEFT,
    },
    {
        name: 'TEST',
        positions: [EIGHTH_POSITION, NINTH_POSITION, FOURTH_POSITION],
        side: Side.RIGHT,
    },
    {
        name: 'SUUUU',
        positions: [SEVENTH_POSITION, FIRST_POSITION, FIFTH_POSITION, FOURTH_POSITION, SECOND_POSITION],
        side: Side.RIGHT,
    },
    {
        name: 'KIKOO',
        positions: [SECOND_POSITION, NINTH_POSITION],
        side : Side.LEFT,
    },
];
