import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';
import { ButtonStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    public password: string = "";
    public passwordInput: string = "";
    public showWarning: boolean = false;
    
    @Input()
    public buttonStyle: ButtonStyle = new ButtonStyle({width: '10vw', height: '5vh'});

    constructor(public loginService: LoginService, public router: Router) { 
        loginService.password$.subscribe((password: string) => {
            this.password = password;
        });
    }
    
    ngOnInit(): void { }
    
    public onPasswordChange(event: any): void {
        this.passwordInput = event.target.value;
    }
    public tryLogin(): void {
        if (this.passwordInput === this.password) {
            this.router.navigate(['/profiles']);
        }
        else {
            this.showWarning = true;
        }
    }
}