import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { ProfilesFixture } from 'src/app/pages/profiles/profiles.fixture';
import { ProfileOptionFixture } from 'src/app/pages/profile-options/profiles.fixture';

// https://playwright.dev/docs/locators
test.describe('Ajout d\'un profil', () => {
    test('Ajout', async ({ page }) => {
    await page.goto(testUrl+'/profiles');
        const profilesComponentFixture = new ProfilesFixture(page);
        const profileOptionComponentFixture = new ProfileOptionFixture(page);
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

            await profilesComponentFixture.clickShowProfile();
            const nameField = await profileOptionComponentFixture.getNameField();
            expect(nameField).toBeVisible();
            expect(nameField).toHaveValue('Doe');

            const firstNameField = await profileOptionComponentFixture.getFirstnameField(); 
            expect(firstNameField).toBeVisible();
            expect(firstNameField).toHaveValue('John');

            const ageField = await profileOptionComponentFixture.getAgeField();
            expect(ageField).toBeVisible();
            expect(ageField).toHaveValue('12');
    
        });

        await test.step('suppression du profil', async () => {
            const deleteButton = await profileOptionComponentFixture.getDeleteProfileButton();
            expect(deleteButton).toBeVisible();
            await deleteButton.click();
            const confirmButton = await profileOptionComponentFixture.getConfirm();
            expect(confirmButton).toBeVisible();
            await confirmButton.click();

            const newCount = await profilesComponentFixture.getProfileListCount();
            expect(newCount).toBe(count);
        });

    });


    test('Essai d\'ajout d\'un profil avec age incorrect', async ({ page }) => {
        await page.goto(testUrl + '/profiles');
        const profilesComponentFixture = new ProfilesFixture(page);
        const profileOptionComponentFixture = new ProfileOptionFixture(page);
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

        await test.step('ajout du profil avec un mauvais age', async () => {
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
            await ageField.fill('abc');

            await profilesComponentFixture.createProfile();
        });

        await test.step('vérification de l\'ajout du profil', async () => {
            const profiles = await profilesComponentFixture.getProfiles();
            expect(profiles).toBeVisible();

            const newCount = await profilesComponentFixture.getProfileListCount();
            expect(newCount).toBe(count);
            
            const checkAgeError = await profilesComponentFixture.checkAgeError();
            expect(checkAgeError).toBeVisible();
        });

    });

    test('Essai d\'ajout d\'un profil sans nom ou prénom', async ({ page }) => {
        await page.goto(testUrl + '/profiles');
        const profilesComponentFixture = new ProfilesFixture(page);
        const profileOptionComponentFixture = new ProfileOptionFixture(page);
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


        await test.step('ajout du profil sans nom', async () => {
            count = await profilesComponentFixture.getProfileListCount();

            await profilesComponentFixture.clickAddProfileButton();

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
            expect(newCount).toBe(count);

        });

        await test.step('ajout du profil sans prénom', async () => {

            const nameField = await profilesComponentFixture.getNameField();
            expect(nameField).toBeVisible();
            await nameField.fill('Doe');

            const firstNameField = await profilesComponentFixture.getFirstnameField();
            expect(firstNameField).toBeVisible();
            await firstNameField.fill('');

            const ageField = await profilesComponentFixture.getAgeField();
            expect(ageField).toBeVisible();
            await ageField.fill('12');

            await profilesComponentFixture.createProfile();
        });

        await test.step('vérification de l\'ajout du profil', async () => {
            const profiles = await profilesComponentFixture.getProfiles();
            expect(profiles).toBeVisible();

            const newCount = await profilesComponentFixture.getProfileListCount();
            expect(newCount).toBe(count);

        });  

    });

    test('Annulation de la création du profil', async ({ page }) => {
        await page.goto(testUrl + '/profiles');
        const profilesComponentFixture = new ProfilesFixture(page);
        const profileOptionComponentFixture = new ProfileOptionFixture(page);
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
            
            await profilesComponentFixture.cancelCreation();
        });


        await test.step('vérification de l\'ajout du profil', async () => {
            const profiles = await profilesComponentFixture.getProfiles();
            expect(profiles).toBeVisible();

            const newCount = await profilesComponentFixture.getProfileListCount();
            expect(newCount).toBe(count);
        });

    });
});