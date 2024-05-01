import { Component, Input, OnInit } from '@angular/core';

export interface Item {
    name: string;
    url: string;
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
    

export class NavbarComponent implements OnInit {

    @Input() public default: number = 0;

    public navItems: Item[] = [{ name: 'options du profil', url: '/profile-options' }, { name: 'statistiques', url: '/statistics' }]; 

    constructor() {}

    ngOnInit(): void {}

}