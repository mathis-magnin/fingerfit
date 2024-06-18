import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import { Locator, Page } from "playwright/test";

export class QuizzesFixture extends E2EComponentFixture {

    private quizName: Locator;

    constructor(page: Page) {
        super(page);
        this.quizName = this.page.getByPlaceholder("Nom du quiz");
    }

    getButton(buttonName: string) {
        return this.page.locator("app-button", { hasText: buttonName });
    }

    getQuizName() {
        return this.quizName;
    }

    getSearchBar() {
        return this.page.getByPlaceholder("Rechercher");
    }

    getListItem(name: string) {
        return this.page.locator("app-list-item").filter({ hasText: name });
    }



    clickOnButton(buttonName: string) {
        return this.page.locator("app-button", { hasText: buttonName }).click();
    }

    writeQuizName(name: string) {
        return this.quizName.fill(name);
    }

    search(research: string) {
        return this.page.getByPlaceholder("Rechercher").fill(research);
    }

    clickOnListItem(name: string) {
        return this.page.locator("app-list-item").filter({ hasText: name }).click();
    }

    clearSearchBar() {
        return this.page.getByPlaceholder("Rechercher").clear();
    }

}