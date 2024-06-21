import { Component, Input, OnInit } from '@angular/core';
import { NavbarItem } from 'src/models/navbar.model';
import { ButtonStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Input() public showExitButton: boolean = true;

    @Input() public currentPageIndex: number = 0;

    @Input() public navItems: NavbarItem[] = [{ name: 'Home', url: '/home' }]; 

    @Input() public exitButtonLink: string = '/home';

    public exitButtonStyle: ButtonStyle = new ButtonStyle({width: '2.5vw', backgroundColor: 'cornflowerblue'});

    constructor() {}

    ngOnInit(): void {}

}