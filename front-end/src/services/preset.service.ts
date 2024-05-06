import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Preset } from '../models/preset.model';

@Injectable({
    providedIn: 'root'
})
export class PresetService {


    constructor() { }

    public preset$: BehaviorSubject<Preset> = new BehaviorSubject<Preset>({chronometer: false, timePerQuestion: 0});
}