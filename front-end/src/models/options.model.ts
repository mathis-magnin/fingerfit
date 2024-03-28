import { Quiz } from './quiz.model';

export enum Side {
    LEFT,
    RIGHT
}

export interface Options {
    hand: Side;
    chronometer: boolean;
    timePerQuestion: number | undefined;
    quiz: Quiz | undefined;
}