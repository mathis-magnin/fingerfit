import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { httpOptionsBase, serverUrl } from 'src/configs/server.config';
import { Password } from 'src/models/login.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    /**
     * This service is not really secure as password verification is done here and not in the backend. 
     * Additionally, the password is not encrypted.
     */

    private passwordUrl = serverUrl + '/passwords';
    private httpOptions = httpOptionsBase;

    public firstConnection$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public correctPassword$: BehaviorSubject<boolean> = new BehaviorSubject(false);


    constructor(private http: HttpClient) { }


    public checkFirstConnection(): void {
        this.http.get<Password[]>(this.passwordUrl).subscribe((passwords) => {
            this.firstConnection$.next(passwords.length == 0);
        });
    }


    public createPassword(password: string) {
        this.http.post<Password>(this.passwordUrl, { id: 0, password: password }, this.httpOptions).subscribe(() => { });
    }


    public checkPassword(password: string) {
        this.http.get<Password[]>(this.passwordUrl).subscribe((passwords) => {
            this.correctPassword$.next((passwords.length == 1) && (passwords[0].password == password));
        });
    }


    public updatePassword(lastPassword: string, newPassword: string) {
        this.http.get<Password[]>(this.passwordUrl).subscribe((passwords) => {
            this.correctPassword$.next((passwords.length == 1) && (passwords[0].password == lastPassword));
            this.http.put<Password>(this.passwordUrl + '/' + passwords[0].id, { id: passwords[0].id, password: newPassword }).subscribe(() => { });
        });
    }


    public reset() {
        this.firstConnection$.next(true);
        this.correctPassword$.next(false);
    }

}