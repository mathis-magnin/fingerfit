import { E2EComponentFixture } from "e2e/e2e-component.fixture";

export class ProfileOptionFixture extends E2EComponentFixture {

    getNameField() {
        return this.page.getByPlaceholder('Nom').first();
    }

    getFirstnameField() {
        return this.page.getByPlaceholder('Prénom');
    }

    getAgeField() {
        return this.page.getByPlaceholder('Age');
    }

    getDeleteProfileButton() {
        return this.page.locator('.delete button');
    }

    clickDeleteProfileButton() {
        return this.getDeleteProfileButton().click();
    }

    getConfirm() {
        return this.page.locator('app-button', { hasText: 'Supprimer' });
    }

    clickConfirm() {
        return this.getConfirm().click();
    }
    
}