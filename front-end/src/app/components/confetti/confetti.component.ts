import { Component } from '@angular/core';

interface Confetti {
    left: number;
    color: string;
    animationDelay: string;
}

@Component({
    selector: 'app-confetti',
    templateUrl: './confetti.component.html',
    styleUrls: ['./confetti.component.scss']
})
export class ConfettiComponent {
    confettis: Confetti[] = [];

    constructor() { }

    ngOnInit() {
        const numConfetti = 300;

        for (let i = 0; i < numConfetti; i++) {
            this.confettis.push({
                left: this.getRandomInt(0, window.innerWidth),
                color: this.getRandomColor(),
                animationDelay: this.getRandomInt(0, 3000) + 'ms' // Random delay up to 3 seconds
            });
        }
    }

    getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomColor(): string {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}