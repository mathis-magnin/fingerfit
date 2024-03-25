import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';
import { Finger } from '../models/finger.model';

export const FIRST_QUESTION: Question = {
    answers: [
        {
            label: 'T',
            finger: Finger.PINKY
        },
        {
            label: 'B',
            finger: Finger.THUMB
        },
        {
            label: 'E',
            finger: Finger.RING
        },
        {
            label: 'Z',
            finger: Finger.MIDDLE
        },
        {
            label: 'Q',
            finger: Finger.INDEX
        }
    ]
};

export const SECOND_QUESTION: Question = {
    answers: [
        {
            label: 'ESPACE',
            finger: Finger.THUMB
        },
        {
            label: 'S',
            finger: Finger.INDEX
        },
        {
            label: 'Y',
            finger: Finger.MIDDLE
        },
        {
            label: 'K',
            finger: Finger.RING
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'HELLO',
        questions: [FIRST_QUESTION],
    },
    {
        name: 'WORLD',
        questions: [FIRST_QUESTION, SECOND_QUESTION],
    }
];
