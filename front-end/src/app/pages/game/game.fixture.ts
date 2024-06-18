import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import { Locator, Page } from "playwright/test";

export class GameFixture extends E2EComponentFixture {

    private pauseButton: Locator;
    private resumePopUpButton: Locator;

    private static keys: String[] = [
        "A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P",
        "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M",
        "W", "X", "C", "V", "B", "N", ",", ";", ":", "!",
        "Space"
    ]

    constructor(page: Page) {
        super(page);

        this.pauseButton = this.page.locator("app-button", { hasText: "Faire une pause" });
        this.resumePopUpButton = this.page.locator("app-button", { hasText: "Reprendre" });
    }


    /* Pause button */

    getPauseButton() {
        return this.pauseButton;
    }

    clickPauseButton() {
        return this.pauseButton.click();
    }


    /* Resume button */

    getResumePopUpButton() {
        return this.resumePopUpButton;
    }

    clickResumePopUpButton() {
        return this.resumePopUpButton.click();
    }


    /* Key */

    getAllKeys() {
        return GameFixture.keys;
    }

    getKey(str: string) {
        if (str != "Space") {
            return this.page.locator("app-key", { hasText: str, hasNotText: "ESPACE" });
        }
        return this.page.locator("app-key", { hasText: "ESPACE" });
    }

    clickKey(str: string) {
        return this.getKey(str).click();
    }

}