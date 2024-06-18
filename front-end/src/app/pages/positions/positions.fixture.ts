import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class PositionsFixture extends E2EComponentFixture {

    getButton(name: string) {
        return this.page.locator('app-button', {hasText: name});
    }

    getSelector(name: string, n: number = 0) {
        return this.page.locator('select', {hasText: name}).nth(n);
    }

    clickCreateButton() {
        return this.getButton('Créer').click();
    }
}