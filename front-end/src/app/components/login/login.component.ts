import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';
import { ButtonStyle } from 'src/models/style-input.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    @ViewChild('passwordInput') inputElement!: ElementRef; 

    public password: string = "";
    public passwordInput: string = "";
    public showWarning: boolean = false;
    public firstTime: boolean = true;
    
    @Input()
    public buttonStyle: ButtonStyle = new ButtonStyle({width: '10vw', height: '5vh'});

    constructor(public loginService: LoginService, public router: Router) { 
        loginService.password$.subscribe((password: string) => {
            this.password = password;
        });
    }
    
    ngOnInit(): void { 
    }

    ngAfterViewInit() {
        this.inputElement.nativeElement.focus();
    }
    
    public onPasswordChange(event: any): void {
        console.log(event.target.value);
        this.passwordInput = event.target.value;
        if (this.firstTime) {
            this.firstTime = false;
            document.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    this.tryLogin();
                }
            });
        }
    } 

    public focusInput(): void {
        document.getElementById('passwordInput')
    }

    public tryLogin(): void {
        if (this.passwordInput === this.password) {
            this.router.navigate(['/profiles']);
            this.passwordInput = "";
            document.removeEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    this.tryLogin();
                }
            });
        }
        else {
            this.showWarning = true;
        }
    }

}