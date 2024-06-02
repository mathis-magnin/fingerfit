import { Component, Input } from '@angular/core';
import { PlayerService } from 'src/services/player.service';

@Component({
    selector: 'app-congrat-character',
    templateUrl: './congrat-character.component.html',
    styleUrls: ['./congrat-character.component.scss']
})



export class CongratCharacterComponent {

    @Input() public congratulation: string = 'Bravo ! ';
    public characterImg: string = '../../../assets/super_hand.png';

    constructor(private playerService: PlayerService) {
        this.playerService.player$.subscribe((player) => {
            if (player) {
                this.characterImg = player.profilePicture;
            }
        });
    }


}