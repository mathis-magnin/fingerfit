import { Component, Input, OnInit } from '@angular/core';
import { OptionsService } from '../../../services/options.service';
import { ButtonStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-exit-button',
    templateUrl: './exit-button.component.html',
    styleUrls: ['./exit-button.component.scss']
})

export class ExitButtonComponent implements OnInit {

    @Input()
    public link?: string;

    @Input()
    public text?: string;

    @Input()
    public exitFunction?: () => void;

    @Input()
    public buttonStyle: ButtonStyle = new ButtonStyle({width: '2.5vw', backgroundColor: 'red'});

    constructor(public optionsService:OptionsService) { }

    ngOnInit(): void { }

    // unused
    public exit(): void {
        if (this.exitFunction) {
            this.exitFunction();
        }
    }
}