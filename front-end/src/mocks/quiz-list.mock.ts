import { Finger, Symbol, Position, Quiz } from '../models/quiz.model';

export const FIRST_POSITION: Position = {
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

export const SECOND_POSITION: Position = {
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

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'HELLO',
        positions: [FIRST_POSITION],
    },
    {
        name: 'WORLD',
        positions: [FIRST_POSITION, SECOND_POSITION],
    }
];
