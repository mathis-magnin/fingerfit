import { Quiz } from './quiz.model';

export interface Options {
    quiz: Quiz | undefined;
    gameMode: GameMode;
    timeMesure: TimeMesure;
    countdown: number;
}


export enum GameMode {
    ALL_AT_ONCE,
    ONE_BY_ONE
}


export function gameModeToString(gameMode: GameMode): string {
    switch (gameMode) {
        case GameMode.ONE_BY_ONE:
            return "Un doigt après l'autre";
        default /* case GameMode.ALL_AT_ONCE */:
            return "Tous les doigts en même temps";
    }
}


export function stringToGameMode(gm: string): GameMode {
    switch (gm) {
        case "Un doigt après l'autre":
            return GameMode.ONE_BY_ONE;
        default /* case "Tous les doigts en même temps" */:
            return GameMode.ALL_AT_ONCE;
    }
}


export enum TimeMesure {
    NONE,
    CHRONOMETER,
    COUNTDOWN
}


export function timeMesureToString(timeMesure: TimeMesure) {
    switch (timeMesure) {
        case TimeMesure.NONE:
            return "Aucune mesure";

        case TimeMesure.CHRONOMETER:
            return "Chronomètre";

        case TimeMesure.COUNTDOWN:
            return "Compte à rebours";
    }
}


export function stringToTimeMesure(str: string) {
    switch (str) {
        case "Chronomètre":
            return TimeMesure.CHRONOMETER;

        case "Compte à rebours":
            return TimeMesure.COUNTDOWN;

        default:
            return TimeMesure.NONE;
    }
}