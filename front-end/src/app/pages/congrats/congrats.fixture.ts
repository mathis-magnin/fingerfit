import { E2EComponentFixture } from "e2e/e2e-component.fixture";
import { Locator, Page } from "playwright/test";

export class CongratsFixture extends E2EComponentFixture {

    private leaveButton: Locator;
    private replayButton: Locator;
    private leavePopUpButton: Locator;
    private passwordPopUpInput: Locator;
    private connectPopUpButton: Locator;

    constructor(page: Page) {
        super(page);

        this.leaveButton = this.page.locator("app-button", { hasText: "Quitter" });
        this.replayButton = this.page.locator("app-button", { hasText: "Rejouer" });
        this.leavePopUpButton = this.page.locator("app-popup").locator("app-exit-button");
        this.passwordPopUpInput = this.page.getByPlaceholder("Mot de passe");
        this.connectPopUpButton = this.page.locator("app-button", { hasText: "Se connecter" });
    }


    /* Leave button */

    getLeaveButton() {
        return this.leaveButton;
    }

    clickLeaveButton() {
        return this.leaveButton.click();
    }


    /* Replay button */

    getReplayButton() {
        return this.replayButton;
    }

    clickReplayButton() {
        return this.replayButton.click();
    }


    /* Pop up */

    /* Leave button */

    getLeavePopUpButton() {
        return this.leavePopUpButton;
    }

    clickLeavePopUpButton() {
        return this.leavePopUpButton.click();
    }


    /* Password input */

    getPasswordPopUpInput() {
        return this.passwordPopUpInput;
    }

    fillPasswordPopUpInput(str: string) {
        return this.passwordPopUpInput.fill(str);
    }


    /* Connect button */

    getConnectPopUpButton() {
        return this.connectPopUpButton;
    }

    clickConnectPopUpButton() {
        return this.connectPopUpButton.click();
    }

}