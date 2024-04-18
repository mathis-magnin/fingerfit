import { Quiz } from './quiz.model';
import { Side } from './quiz.model';


export interface Options {
    chronometer: boolean;
    timePerQuestion: number | undefined;
    quiz: Quiz | undefined;
}