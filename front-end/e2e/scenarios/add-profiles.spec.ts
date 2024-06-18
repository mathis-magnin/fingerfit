import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { ProfilesFixture } from 'src/app/pages/profiles/profiles.fixture';
import { ProfilesService } from 'src/services/profiles.service';

// https://playwright.dev/docs/locators
test.describe('Ajout d\'un profil', () => {
    test('Ajout', async ({ page }) => {
    await page.goto(testUrl+'/profiles');
        const profilesComponentFixture = new ProfilesFixture(page);
        var count = 0;

        await test.step('initialisation sur la page de profil', async () => {
            const title = await profilesComponentFixture.getTitle();
            expect(title).toBeVisible();
            expect(title).toHaveText('Profils');

            const profiles = await profilesComponentFixture.getProfiles();
            expect(profiles).toBeVisible();

            const showProfileButton = await profilesComponentFixture.getShowProfile();
            expect(showProfileButton).toBeVisible();

            const statsButton = await profilesComponentFixture.getShowStat();
            expect(statsButton).toBeVisible();

            const addProfileButton = await profilesComponentFixture.getAddProfileButton();
            expect(addProfileButton).toBeVisible();
            
            
            
        });

        await test.step('ajout du profil', async () => {
            count = await profilesComponentFixture.getProfileListCount();

            await profilesComponentFixture.clickAddProfileButton();

            const nameField = await profilesComponentFixture.getNameField();
            expect(nameField).toBeVisible();
            await nameField.fill('Doe');

            const firstNameField = await profilesComponentFixture.getFirstnameField();
            expect(firstNameField).toBeVisible();
            await firstNameField.fill('John');

            const ageField = await profilesComponentFixture.getAgeField();
            expect(ageField).toBeVisible();
            await ageField.fill('12');
            
            await profilesComponentFixture.createProfile();
        });

        await test.step('vérification de l\'ajout du profil', async () => {
            const profiles = await profilesComponentFixture.getProfiles();
            expect(profiles).toBeVisible();

            const newCount = await profilesComponentFixture.getProfileListCount();

            //recherche du profil ajouté
            const searchInput = await profilesComponentFixture.getSearchInput();
            expect(searchInput).toBeVisible();
            await searchInput.fill('Doe');
            const newCount2 = await profilesComponentFixture.getProfileListCount();


            //affichage du profil ajouté si possible
            if(count<=2){
                expect(newCount).toBe(count + 1);
            }
            else{
                expect(newCount).toBe(count);
            }
            expect(newCount2).toBeGreaterThan(0);
        });


    });
});