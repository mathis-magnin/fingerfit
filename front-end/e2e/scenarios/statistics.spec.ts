import {test, expect} from '@playwright/test';
import {testUrl} from 'e2e/e2e.config';
import { StatisticsFixture } from 'src/app/pages/statistics/statistics.fixture';

test.describe('Statistics', () => {

    test('Check statistics', async ({page}) => {
        await page.goto(testUrl + '/profiles');
        
        const statisticsFixture = new StatisticsFixture(page);
        await page.getByRole('button').nth(3).click();
        
        await test.step('Check statistics', async () => {
            expect(await statisticsFixture.countPositions()).toBe(3);
            await expect(page).toHaveScreenshot('stats-test-0.png');
            //await expect(page).not.toHaveScreenshot('stats-test-1.png');
            //await expect(page).not.toHaveScreenshot('stats-test-2.png');
            //await expect(page).not.toHaveScreenshot('stats-test-3.png');
            await statisticsFixture.clickPosition(0);
            await statisticsFixture.clickStatButton();
            await expect(page).toHaveScreenshot('stats-test-1.png');
            await statisticsFixture.clickPosition(1);
            await statisticsFixture.clickPosition(2);
            await statisticsFixture.clickStatButton();
            await expect(page).toHaveScreenshot('stats-test-3.png');
            //await expect(page).not.toHaveScreenshot('stats-test-2.png');
            //await expect(page).not.toHaveScreenshot('stats-test-1.png');
            //await expect(page).not.toHaveScreenshot('stats-test-0.png');
            await statisticsFixture.clickPosition(0);
            await statisticsFixture.clickStatButton();
            await expect(page).toHaveScreenshot('stats-test-2.png');
        });

        await test.step('Text input test', async () => {
            await statisticsFixture.clickPosition(1);
            await statisticsFixture.fillInput('Rechercher', 'cxfh ');
            await statisticsFixture.clickPosition(0);
            await statisticsFixture.fillInput('Rechercher', '');
            await statisticsFixture.clickStatButton();
            await expect(page).toHaveScreenshot('stats-test-0.png');
        });

    });

});
