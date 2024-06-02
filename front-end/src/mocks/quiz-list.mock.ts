import { Quiz } from '../models/quiz.model';
import { Position, Side } from '../models/position.model';
import { Symbol, Finger } from '../models/key.model';

export const FIRST_POSITION_RIGHT: Position = {
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
    ],
    side: Side.RIGHT,
    id: 0
};

export const SECOND_POSITION_RIGHT: Position = {
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
    ],
    side: Side.RIGHT,
    id: 1
};

export const THIRD_POSITION_RIGHT: Position = {
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
    ],
    side: Side.RIGHT,
    id: 2
};

export const FOURTH_POSITION_RIGHT: Position = {
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
            symbol: Symbol.I,
            finger: Finger.RING
        },
        {
            symbol: Symbol.Y,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.T,
            finger: Finger.INDEX
        }
    ],
    side: Side.RIGHT,
    id: 3
};

export const FIRST_POSITION_LEFT: Position = {
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
    ],
    side: Side.LEFT,
    id: 4
};

export const SECOND_POSITION_LEFT: Position = {
    keys: [
        {
            symbol: Symbol.A,
            finger: Finger.PINKY
        },
        {
            symbol: Symbol.SPACE,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.Z,
            finger: Finger.RING
        },
        {
            symbol: Symbol.E,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.R,
            finger: Finger.INDEX
        }
    ],
    side: Side.LEFT,
    id: 5
};

export const THIRD_POSITION_LEFT: Position = {
    keys: [
        {
            symbol: Symbol.SPACE,
            finger: Finger.PINKY
        },
        {
            symbol: Symbol.F,
            finger: Finger.RING
        },
        {
            symbol: Symbol.N,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.K,
            finger: Finger.INDEX
        }
    ],
    side: Side.LEFT,
    id: 6
};

export const FOURTH_POSITION_LEFT: Position = {
    keys: [
        {
            symbol: Symbol.SPACE,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.P,
            finger: Finger.RING
        },
        {
            symbol: Symbol.M,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.QUESTION_MARK,
            finger: Finger.INDEX
        }
    ],
    side: Side.LEFT,
    id: 7
};

export const FIFTH_POSITION_LEFT: Position = {
    keys: [
        {
            symbol: Symbol.K,
            finger: Finger.THUMB
        },
        {
            symbol: Symbol.V,
            finger: Finger.RING
        },
        {
            symbol: Symbol.T,
            finger: Finger.MIDDLE
        },
        {
            symbol: Symbol.N,
            finger: Finger.INDEX
        }
    ],
    side: Side.LEFT,
    id: 8
};


export const POSITION_LIST: Position[] = [
    FIRST_POSITION_RIGHT,
    SECOND_POSITION_RIGHT,
    THIRD_POSITION_RIGHT,
    FOURTH_POSITION_RIGHT,

    FIRST_POSITION_LEFT,
    SECOND_POSITION_LEFT,
    THIRD_POSITION_LEFT,
    FOURTH_POSITION_LEFT,
    FIFTH_POSITION_LEFT,
]


export const QUIZ_LIST: Quiz[] = [
    {
        id: 0,
        name: 'Quiz 1',
        positions: [FIRST_POSITION_RIGHT, SECOND_POSITION_RIGHT, THIRD_POSITION_RIGHT],
        side: Side.RIGHT
    },
    {
        id: 1,
        name: 'Quiz 2',
        positions: [SECOND_POSITION_LEFT, FOURTH_POSITION_LEFT],
        side: Side.LEFT
    },
    {
        id: 2,
        name: 'Quiz 3',
        positions: [FIRST_POSITION_LEFT, FOURTH_POSITION_LEFT, THIRD_POSITION_LEFT, SECOND_POSITION_LEFT],
        side: Side.LEFT
    },
    {
        id: 3,
        name: 'Quiz 4',
        positions: [FIFTH_POSITION_LEFT, THIRD_POSITION_LEFT, SECOND_POSITION_LEFT, FIRST_POSITION_LEFT],
        side: Side.LEFT
    },
    {
        id: 4,
        name: 'Quiz 5',
        positions: [SECOND_POSITION_RIGHT, FIRST_POSITION_RIGHT, THIRD_POSITION_RIGHT, FOURTH_POSITION_RIGHT],
        side: Side.RIGHT
    },
    {
        id: 5,
        name: 'Quiz 6',
        positions: [FIRST_POSITION_LEFT, SECOND_POSITION_LEFT, THIRD_POSITION_LEFT, FOURTH_POSITION_LEFT, FIFTH_POSITION_LEFT],
        side: Side.LEFT
    },
    {
        id: 6,
        name: 'Quiz 7',
        positions: [FIRST_POSITION_LEFT, SECOND_POSITION_RIGHT, THIRD_POSITION_RIGHT, FOURTH_POSITION_LEFT],
        side: Side.BOTH
    },
    {
        id: 7,
        name: 'Une seule position',
        positions: [FIRST_POSITION_RIGHT],
        side: Side.RIGHT
    }
];
