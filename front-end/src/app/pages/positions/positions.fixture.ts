import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class PositionsFixture extends E2EComponentFixture {

    getButton(name: string) {
        return this.page.locator('app-button', {hasText: name});
    }

    clickButton(name: string) {
        return this.getButton(name).click();
    }

    getSelector(name: string, n: number = 0) {
        return this.page.locator('select', {hasText: name}).nth(n);
    }

    selectInSelector(name: string, value: string, n: number = 0) {
        const selector = this.getSelector(name, n);
        return selector.selectOption(value);
    }

    getTextInput(name: string) {
        return this.page.getByPlaceholder(name);
    }

    fillInput(name: string, value: string) {
        return this.getTextInput(name).fill(value);
    }   

    getPosition() {
        return this.page.locator('app-list-item').nth(0);
    }

    countPositions() {
        return this.page.locator('app-list-item').count();
    }

    getByText(text: string) {
        return this.page.getByText(text);
    }
}