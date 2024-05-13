import { Query } from "@angular/core";
import { QuizListComponent } from "src/app/components/quiz-list/quiz-list.component";

interface BoxStyleType {
    width?: string;
    backgroundColor?: string;
    border?: string;
    padding?: string;
}

const defaultBoxStyle: BoxStyleType = {
    width: '15vw',
    backgroundColor: 'lightblue',
    border: 'none',
    padding: '1vw'
};

export class BoxStyle {

    private boxStyle: BoxStyleType;

    constructor(inputBoxStyle: BoxStyleType) {
        this.boxStyle = { ...defaultBoxStyle, ...inputBoxStyle };
    }

    public getStyle(): BoxStyleType {
        return this.boxStyle;
    }
}

interface ButtonStyleType {
    width?: string;
    height?: string;
    fontSize?: string;
    backgroundColor?: string;
    borderRadius?: string;
    margin?: string;
}

const defaultButtonStyle: ButtonStyleType = {
    width: 'fit-content',
    height: 'fit-content',
    fontSize: '1vw',
    backgroundColor: '#1dc42e',
    borderRadius: '5px',
    margin: '0',
};

export class ButtonStyle {

    private buttonStyle: ButtonStyleType;

    constructor(inputButtonStyle: ButtonStyleType) {
        this.buttonStyle = { ...defaultButtonStyle, ...inputButtonStyle };
    }

    public getStyle(): ButtonStyleType {
        return this.buttonStyle;
    }
}


export interface HandStyle {
    width: string;
    height: string;
}


export interface KeyStyle {
    fontSize: string;
}


interface KeyboardStyleType {
    rowGap: string;
}

export class KeyboardStyle {
    private keyStyle: KeyStyle;
    private keyboardStyle: KeyboardStyleType;

    constructor(fontSize: number) {
        this.keyStyle = { fontSize: String(fontSize) + 'em' };
        this.keyboardStyle = { rowGap: String(fontSize / 2) + 'em' };
    }

    public getKeyStyle(): KeyStyle {
        return this.keyStyle;
    }

    public getKeyboardStyle(): KeyboardStyleType {
        return this.keyboardStyle;
    }
}


export interface QuizListStyle {
    height: string;
}