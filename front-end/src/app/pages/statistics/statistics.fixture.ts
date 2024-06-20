import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class StatisticsFixture extends E2EComponentFixture {

    getByText(text: string) {
        return this.page.getByText(text);
    }

    getPosition(n: number = 0) {
        return this.page.locator('app-list-item').nth(n);
    }

    clickPosition(n: number = 0) {
        return this.getPosition(n).click();
    }

    clickStatButton() {
        return this.page.getByText('Statistiques').click();
    }

    countPositions() {
        return this.page.locator('app-list-item').count();
    }

    getTextInput(name: string) {
        return this.page.getByPlaceholder(name);
    }

    fillInput(name: string, value: string) {
        return this.getTextInput(name).fill(value);
    }  
}