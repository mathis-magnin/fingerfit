import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameMode, gameModeToString, stringToGameMode } from 'src/models/options.model';

@Component({
    selector: 'app-game-mode-selection',
    templateUrl: './game-mode-selection.component.html',
    styleUrls: ['./game-mode-selection.component.scss']
})

export class GameModeSelectionComponent {

    public gameModeToString = gameModeToString;
    public gameModes: GameMode[] = [];

    public selectedGameMode: GameMode = GameMode.ALL_AT_ONCE;

    @Output() gameModeSelected: EventEmitter<GameMode> = new EventEmitter<GameMode>();

    constructor() {
        for (let gameMode = GameMode.ALL_AT_ONCE; gameMode <= GameMode.ONE_BY_ONE; gameMode++) {
            this.gameModes.push(gameMode);
        }
    }

    public onSelect(o: string) {
        this.selectedGameMode = stringToGameMode(o);
        console.log(this.selectedGameMode);
        this.gameModeSelected.emit(this.selectedGameMode);
    }

}