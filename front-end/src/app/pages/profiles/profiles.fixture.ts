import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class ProfilesFixture extends E2EComponentFixture {

    /* Search bar */

    getSearchBar() {
        return this.page.getByPlaceholder("Rechercher");
    }

    fillSearchBar(str: string) {
        return this.getSearchBar().fill(str);
    }


    /* Play button */

    getPlayButton() {
        return this.page.locator("app-button", { hasText: "Jouer" });
    }

    clickPlayButton() {
        return this.getPlayButton().click();
    }

}