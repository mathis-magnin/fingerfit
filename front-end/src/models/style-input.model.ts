interface BoxStyleType {
    width?: string;
    backgroundColor?: string;
}

const defaultBoxStyle: BoxStyleType = {
    width: '15vw',
    backgroundColor: 'lightblue'
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
    backgroundColor?: string;
    borderRadius?: string;
}

const defaultButtonStyle: ButtonStyleType = {
    width: 'fit-content',
    height: 'fit-content',
    backgroundColor: '#1dc42e',
    borderRadius: '5px'
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
