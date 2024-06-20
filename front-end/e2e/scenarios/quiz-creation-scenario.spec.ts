import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';
import { QuizzesFixture } from 'src/app/pages/quizzes/quizzes.fixture';

test.describe('Quiz creation test', () => {
    test('Create quiz', async ({ page }) => {
        await page.goto(testUrl + "/quizzes");

        const quizzesFixture = new QuizzesFixture(page);

        await test.step("First layout", async () => {
            expect(quizzesFixture.getButton("Créer").isVisible());
            await quizzesFixture.clickOnButton("Créer");
        });

        await test.step("Second layout", async () => {
            expect(quizzesFixture.getQuizName().isVisible());
            await quizzesFixture.writeQuizName("Nouveau quiz");

            expect(quizzesFixture.getSearchBar().isVisible());
            await quizzesFixture.search("VRS");

            expect(quizzesFixture.getListItem("V R S").isVisible());
            await quizzesFixture.clickOnListItem("V R S");

            await quizzesFixture.clearSearchBar();
            await quizzesFixture.search(" SRK");

            expect(quizzesFixture.getListItem("ESPACE S R K").isVisible());
            await quizzesFixture.clickOnListItem("ESPACE S R K");

            expect(quizzesFixture.getButton("Créer").isVisible());
            await quizzesFixture.clickOnButton("Créer");
        });

        await test.step("Back to first layout", async () => {
            expect(quizzesFixture.getButton("Ok").isVisible());
            await quizzesFixture.clickOnButton("Ok");

            expect(quizzesFixture.getSearchBar().isVisible());
            await quizzesFixture.search("Nouveau quiz");

            expect(quizzesFixture.getListItem("Nouveau quiz").isVisible());
            await quizzesFixture.clickOnListItem("Nouveau quiz");
        });

        await test.step("Back to second layout", async () => {
            expect(quizzesFixture.getButton("Annuler").isVisible());
            await quizzesFixture.clickOnButton("Annuler");
        });
        
        await test.step("Back to first layout again", async () => {
            expect(quizzesFixture.getSearchBar().isVisible());
            await quizzesFixture.search("Nouveau quiz");

            expect(quizzesFixture.getListItem("Nouveau quiz").isVisible());
            await quizzesFixture.clickOnListItem("Nouveau quiz");
        });

        await test.step("Back to second layout again", async () => {
            expect(quizzesFixture.getButton("Supprimer").isVisible());
            await quizzesFixture.clickOnButton("Supprimer");

            expect(quizzesFixture.getButton("Annuler").isVisible());
            await quizzesFixture.clickOnButton("Annuler");

            await quizzesFixture.clickOnButton("Supprimer");

            expect(quizzesFixture.getButton("Supprimer").isVisible());
            await quizzesFixture.clickOnButton("Supprimer");

            expect(quizzesFixture.getListItem("Nouveau quiz").isHidden());
        });
    });
});
