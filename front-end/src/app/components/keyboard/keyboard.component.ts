import { Component } from '@angular/core';
import { Finger } from '../../../models/finger.model';

@Component({
    selector: 'app-keyboard',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

    Finger = Finger; // To use enum in html

    /* Line 1 */
    public A: string = "A";
    public Z: string = "Z";
    public E: string = "E";
    public R: string = "R";
    public T: string = "T";
    public Y: string = "Y";
    public U: string = "U";
    public I: string = "I";
    public O: string = "O";
    public P: string = "P";

    /* Line 2 */
    public Q: string = "Q";
    public S: string = "S";
    public D: string = "D";
    public F: string = "F";
    public G: string = "G";
    public H: string = "H";
    public J: string = "J";
    public K: string = "K";
    public L: string = "L";
    public M: string = "M";

    /* Line 3 */
    public W: string = "W";
    public X: string = "X";
    public C: string = "C";
    public V: string = "V";
    public B: string = "B";
    public N: string = "N";
    public QUESTION_MARK: string = "?";
    public POINT: string = ".";
    public SLASH: string = "/";
    public SECTION_MARK: string = "§";

    /* Space */
    public SPACE: string = "SPACE";

    constructor() { }
}