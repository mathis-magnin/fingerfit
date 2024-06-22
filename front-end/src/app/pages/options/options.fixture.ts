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


    /* Game mode */

    /* All at once */

    getAllAtOnceButton() {
        return this.page.locator("app-card", { hasText: "Tous les doigts en même temps" });
    }

    clickAllAtOnceButton() {
        return this.getAllAtOnceButton().click();
    }


    /* Time mesure */

    /* No mesure */

    getNoMesureButton() {
        return this.page.locator("app-card", { hasText: "Aucune mesure" });
    }

    clickNoMesureButton() {
        return this.getNoMesureButton().click();
    }


    /* Chronometer */

    getChronometerButton() {
        return this.page.locator("app-card", { hasText: "Chronomètre" });
    }

    clickChronometerButton() {
        return this.getChronometerButton().click();
    }


    /* Countdown */

    getCountdownButton() {
        return this.page.locator("app-card", { hasText: "Compte à rebours" });
    }

    clickCountdownButton() {
        return this.getCountdownButton().click();
    }


    getCountdownInput() {
        return this.page.getByPlaceholder("sec");
    }

    fillCountdownInput(str: string) {
        return this.getCountdownInput().fill(str);
    }


    /* Play button */

    getPlayButton() {
        return this.page.locator("app-button", { hasText: "Valider et Jouer" });
    }

    clickPlayButton() {
        return this.getPlayButton().click();
    }

}