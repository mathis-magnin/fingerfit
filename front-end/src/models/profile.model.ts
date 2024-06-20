import { GameMode, TimeMesure } from "./options.model";

export interface Profile {
    id: number;
    name: string;
    firstName: string;
    age: number;
    profilePicture: string;
    gameMode: GameMode;
    timeMesure: TimeMesure;
    countdown: number;
}