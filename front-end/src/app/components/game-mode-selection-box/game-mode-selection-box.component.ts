import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameMode, gameModeToString, stringToGameMode } from 'src/models/options.model';
import { BoxStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-game-mode-selection-box',
    templateUrl: './game-mode-selection-box.component.html',
    styleUrls: ['./game-mode-selection-box.component.scss']
})

export class GameModeSelectionBoxComponent {

    public gameModeToString = gameModeToString;
    public gameModes: GameMode[] = [];

    public selectedGameMode: GameMode = GameMode.ALL_AT_ONCE;

    @Input() boxStyle: BoxStyle = new BoxStyle({});

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