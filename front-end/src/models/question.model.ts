import { Finger } from "./finger.model";

export interface Key {
    label: string;
    finger: Finger;
}

export interface Question {
    answers: Key[];
}
