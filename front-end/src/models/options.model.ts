import { Quiz } from './quiz.model';

export interface Options {
    chronometer: boolean;
    timePerQuestion: number | undefined;
    quiz: Quiz | undefined;
    gameMode: GameMode;
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