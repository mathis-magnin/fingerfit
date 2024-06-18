import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';


test.describe("Play game scenario", () => {
    test("Basic test", async ({ page }) => {
        await page.goto(testUrl + "/profiles");

        /* On prend en compte qu'il existe un profil avec lequel on peut jouer */
        await test.step("Profiles page", async () => {
            const playButton = await page.locator("app-button", { hasText: 'Jouer' });
            const searchProfileBar = await page.locator("input", {});
            expect(playButton.isVisible());
            expect(searchProfileBar.isVisible());
            await searchProfileBar.fill("Lucas Phéolet");
            await playButton.click();
        });

        await test.step("Game options page", async () => {
            const searchQuizBar = await page.getByPlaceholder("Rechercher");
            expect(searchQuizBar.isVisible());
            await searchQuizBar.fill("Test");

            const quizButton = await page.locator("app-list-item").filter({ hasText: "Test" });
            expect(quizButton.isVisible());
            await quizButton.click();

            // const gameModeSelector = await page.locator("select", { hasText: "Tous les doigts en même temps" });
            // await gameModeSelector.selectOption("Un doigt après l'autre");

            const timerbutton = await page.locator("app-option", { hasText: "Définir un temps par position de main" }).locator("app-checkbox");
            expect(timerbutton.isVisible());
            timerbutton.click();

            const playButton = await page.locator("app-button", { hasText: 'Valider et Jouer' });
            expect(playButton.isVisible());
            await playButton.click();
        });

        await test.step("Game page", async () => {
            const spaceKey = await page.locator("app-key", { hasText: "ESPACE" });
            expect(spaceKey.isVisible());
            await page.keyboard.down('Space');

            const sKey = await page.locator("app-key", { hasText: "S", hasNotText: "ESPACE" });
            expect(sKey.isVisible());
            await page.keyboard.down('S');

            const rKey = await page.locator("app-key", { hasText: "R" });
            expect(rKey.isVisible());
            await page.keyboard.down('R');
            await page.keyboard.down('K');

            await page.keyboard.up("Space");
            await page.keyboard.up('S');
            await page.keyboard.up('R');
            await page.keyboard.up('K');

            await page.keyboard.down('C');
            await page.keyboard.down('X');
            await page.keyboard.down('F');
            await page.keyboard.down('H');
            await page.keyboard.down('Space');

            await page.keyboard.up("C");
            await page.keyboard.up('X');
            await page.keyboard.up('F');
            await page.keyboard.up('H');
            await page.keyboard.up('Space');
        })


        await test.step("Congrats page", async () => {
            const leaveButton = page.locator("app-button", { hasText: "Quitter" });
            await leaveButton.click();

            const password = await page.getByPlaceholder("Mot de passe");
            password.fill("admin");

            const connectButton = page.locator("app-button", { hasText: "Se connecter" });
            connectButton.click();
        });
    });
})