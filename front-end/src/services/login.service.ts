import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
//NOT SECURED ! WILL BE CHANGED WHEN BACKEND WILL BE IMPLEMENTED
export class LoginService {

    public password$: BehaviorSubject<string> = new BehaviorSubject("demoPS6");

    constructor() {}
}