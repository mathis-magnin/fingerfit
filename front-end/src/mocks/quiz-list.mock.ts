import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const FIRST_QUESTION: Question = {
    answers: [
        {
            value: 'T',
            position:4,
        },
        {
            value: 'B',
            position:5
        },
        {
            value: 'E',
            position:3
        },
        {
            value: 'Z',
            position:2
        },
        {
            value: 'Q',
            position:1
        }
    ],
};

export const SECOND_QUESTION: Question = {
    answers: [
        {
            value: 'T',
            position: 4,
        },
        {
            value: 'B',
            position: 5
        },
        {
            value: 'E',
            position: 3
        },
        {
            value: 'Z',
            position: 2
        },
        {
            value: 'Q',
            position: 1
        }
    ],
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'HELLO', 
        questions: [FIRST_QUESTION, SECOND_QUESTION],
    },
    {
        name: 'WORLD',
        questions: [FIRST_QUESTION, SECOND_QUESTION],
    }
];
