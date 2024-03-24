import { Quiz } from './quiz.model';

export interface Options {
    hand: string;
    chronometer: boolean;   
    timePerQuestion: number | undefined;
    quiz: Quiz | undefined;
}