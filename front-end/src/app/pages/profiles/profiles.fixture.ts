import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class ProfilesFixture extends E2EComponentFixture {

    getTitle() {
        return this.page.locator('app-navbar .colored');
    }

    getProfiles() {
        return this.page.locator('app-profile-list')
    }
   
    getProfileListCount() {
        return this.getProfiles().locator('app-profile').count();
    }

    getAddProfileButton() {
        return this.page.locator('app-button', { hasText: 'Ajouter un membre' });
    }

    clickAddProfileButton() {
        return this.getAddProfileButton().click();
    }

    getShowProfile() {
        return this.page.locator('app-profile-list app-button').first();
    }
    

    clickShowProfile() {
        return this.getShowProfile().click();
    }

    getShowStat() {
        return this.page.locator('app-profile-list app-button').last();
    }

    clickShowStat() {
        return this.getShowStat().click();
    }

    getNameField() {
        return this.page.getByPlaceholder('Nom').first();
    }

    getFirstnameField() {
        return this.page.getByPlaceholder('Prénom');
    }

    getAgeField() {
        return this.page.getByPlaceholder('Age');
    }

    createProfile() {
        return this.page.locator('app-button', { hasText: 'Enregistrer le profil' }).click();
    }

}