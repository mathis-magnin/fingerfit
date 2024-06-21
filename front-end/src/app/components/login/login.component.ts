import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';
import { ButtonStyle } from 'src/models/style-input.model';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    @ViewChild('creationInput') creationInputElement!: ElementRef;
    public creationInput: string = "";

    @ViewChild('confirmationInput') confirmationInputElement!: ElementRef;
    public confirmationInput: string = "";

    @ViewChild('connexionInput') connexionInputElement!: ElementRef;
    public connexionInput: string = "";

    public cancelButtonStyle: ButtonStyle = new ButtonStyle({ height: '5vh', backgroundColor: "black" });
    public createButtonStyle: ButtonStyle = new ButtonStyle({ height: '5vh' });


    public warning: string = "";
    public firstTime: boolean = true;

    public firstConnection: boolean = false;
    public update: boolean = false;


    constructor(public loginService: LoginService, public router: Router) {
        this.loginService.firstConnection$.subscribe((firstConnection: boolean) => {
            this.firstConnection = firstConnection;
        });

        this.loginService.correctPassword$.subscribe((correctPassword: boolean) => {
            if (correctPassword) {
                this.navigate();
            }
            else if (!this.firstTime) {
                this.warning = (this.update) ? "Ancien mot de passe incorrect" : "Mot de passe incorect";
            }
            this.firstTime = false;
        });

        this.loginService.checkFirstConnection();

        document.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.pressEnter();
            }
        });
    }


    public ngAfterViewInit() {
        if (this.firstConnection) {
            this.creationInputElement.nativeElement.focus();
        }
        else {
            this.connexionInputElement.nativeElement.focus();
        }
    }


    pressEnter() {
        if (this.firstConnection) {
            if ((this.creationInput == "")) {
                this.creationInputElement.nativeElement.focus();
            }
            else if ((this.creationInput != "") && (this.confirmationInput == "")) {
                this.confirmationInputElement.nativeElement.focus();
            }
            else if ((this.creationInput != "") && (this.confirmationInput != "")) {
                this.createPassword();
            }
        }
        else if (!this.update) {
            this.tryLogin();
        }
        else {
            if ((this.connexionInput == "")) {
                this.connexionInputElement.nativeElement.focus();
            }
            else {
                if ((this.creationInput == "")) {
                    this.creationInputElement.nativeElement.focus();
                }
                else if ((this.creationInput != "") && (this.confirmationInput == "")) {
                    this.confirmationInputElement.nativeElement.focus();
                }
                else if ((this.creationInput != "") && (this.confirmationInput != "")) {
                    this.updatePassword();
                }
            }
        }
    }


    public onCreationChange(event: any) {
        this.creationInput = event.target.value;
    }


    public onConfirmationChange(event: any) {
        this.confirmationInput = event.target.value;
    }


    public onConnexionChange(event: any): void {
        this.connexionInput = event.target.value;
    }


    private navigate() {
        document.removeEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.pressEnter();
            }
        });
        this.creationInput = "";
        this.confirmationInput = "";
        this.connexionInput = "";
        this.update = false;
        this.firstConnection = false;
        this.loginService.reset();
        this.router.navigate(['/profiles']);
    }


    public createPassword(): void {
        this.warning = ((this.creationInput == "") || (this.confirmationInput == "")) ? "Veuillez remplir tous les champs" : ((this.creationInput == this.confirmationInput) ? "" : "Mots de passe non similaires");
        if (this.warning == "") {
            this.loginService.createPassword(this.creationInput);
            this.navigate();
        }
    }


    public tryLogin(): void {
        this.warning = (this.connexionInput == "") ? "Veuillez remplir le champ" : "";
        if (this.warning == "") {
            this.loginService.checkPassword(this.connexionInput);
        }
    }


    public toogleUpdate(): void {
        this.update = !this.update;
        this.connexionInputElement.nativeElement.focus();
        this.warning = "";
    }


    public updatePassword(): void {
        this.warning = ((this.connexionInput == "") || (this.creationInput == "") || (this.confirmationInput == "")) ? "Veuillez remplir tous les champs" : ((this.creationInput == this.confirmationInput) ? "" : "Nouveaux mots de passe non similaires");
        if (this.warning == "") {
            this.loginService.updatePassword(this.connexionInput, this.creationInput);
        }
    }

}