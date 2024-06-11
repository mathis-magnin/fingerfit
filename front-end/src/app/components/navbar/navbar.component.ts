import { Component, Input, OnInit } from '@angular/core';
import { NavbarItem } from 'src/models/navbar.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Input() public currentPageIndex: number = 0;

    @Input() public navItems: NavbarItem[] = [{ name: 'Home', url: '/home' }]; 

    @Input() public exitButtonLink: string = '/home';

    constructor() {}

    ngOnInit(): void {}

}