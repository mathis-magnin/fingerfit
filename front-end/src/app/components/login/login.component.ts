import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    @Output() public isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }
    
    ngOnInit(): void { }
    
}