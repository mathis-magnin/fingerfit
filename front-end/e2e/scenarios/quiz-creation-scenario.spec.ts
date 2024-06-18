import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

test.describe('Quiz creation test', () => {
    test('Create quiz', async ({ page }) => {
        await page.goto(testUrl + "/quizzes");

        await test.step("First layout", async () => {
            const createButton = await page.locator("app-button", { hasText: "Créer" });
            expect(createButton.isVisible());
            await createButton.click();
        });

        await test.step("Second layout", async () => {

            const searchPositionBar = await page.getByPlaceholder("Rechercher");
            expect(searchPositionBar.isVisible());
            await searchPositionBar.fill("§PY");

            const firstPositionToAdd = await page.locator("app-list-item").filter({ hasText: "§ P Y" });
            expect(firstPositionToAdd.isVisible());
            await firstPositionToAdd.click();

            await searchPositionBar.clear();
            await searchPositionBar.fill("?THIZ");

            const secondPositionToAdd = await page.locator("app-list-item").filter({ hasText: "? T H I Z" });
            expect(secondPositionToAdd.isVisible());
            await secondPositionToAdd.click();

            const createButton = await page.locator("app-button", { hasText: "Créer" });
            expect(createButton.isVisible());
            const cancelButton = await page.locator("app-button", { hasText: "Annuler" });
            expect(cancelButton.isVisible());

        });
    });
});
