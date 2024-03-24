import { Question } from './question.model';

export interface Quiz {
    name: string;
    questions: Question[];
}
