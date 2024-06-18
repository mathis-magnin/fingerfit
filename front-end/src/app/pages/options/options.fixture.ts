import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class OptionsFixture extends E2EComponentFixture {

    /* Navigation bar */

    getBackButton() {
        return this.page.locator("app-navbar").locator("button");
    }

    clickBackButton() {
        return this.getBackButton().click();
    }


    /* List */

    /* Search bar */

    getListSearchBar() {
        return this.page.getByPlaceholder("Rechercher");
    }

    fillListSearchBar(str: string) {
        return this.getListSearchBar().fill(str);
    }


    /* Filter */

    getListFilterSelector() {
        return this.page.locator("select", { hasText: "Filtrer" });
    }

    SetListFilterSelector(str: string) {
        return this.getListFilterSelector().selectOption(str);
    }


    /* Quiz */

    getListItem(str: string) {
        return this.page.locator("app-list-item", { hasText: str });
    }

    clickListItem(str: string) {
        return this.getListItem(str).click();
    }


    /* Other options */

    /* Game mode selector */

    getGameModeSelector() {
        return this.page.locator("select", { hasText: "Tous les doigts en même temps" });
    }

    setGameModeSelector(str: string) {
        return this.getGameModeSelector().selectOption(str);
    }


    /* Chronometer */

    getChronometerButton() {
        return this.page.locator("app-option", { hasText: "Afficher le chronomètre" }).locator("app-checkbox");
    }

    clickChronometerbutton() {
        return this.getChronometerButton().click();
    }


    /* Timer */

    getTimerButton() {
        return this.page.locator("app-option", { hasText: "Définir un temps par position de main" }).locator("app-checkbox");
    }

    clickTimerButton() {
        return this.getTimerButton().click();
    }


    /* Play button */

    getPlayButton() {
        return this.page.locator("app-button", { hasText: "Valider et Jouer" });
    }

    clickPlayButton() {
        return this.getPlayButton().click();
    }

}