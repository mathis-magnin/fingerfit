import {test, expect} from '@playwright/test';
import {testUrl} from 'e2e/e2e.config';
import { PositionsFixture } from 'src/app/pages/positions/positions.fixture';

test.describe('Positions creation', () => {
    test('Basic test', async ({page}) => {
        await page.goto(testUrl + '/positions');
        
        const positionsFixture = new PositionsFixture(page);

        await test.step('Choose right hand', async () => {
            await positionsFixture.clickCreateButton();
            const selector = positionsFixture.getSelector('Main gauche');
            await selector.click();
            await selector.selectOption({label: 'Main droite'});
        });

        await test.step('Choose position', async () => {
            const finger1 = positionsFixture.getSelector('AZERTY', 0);
            await finger1.click();
            await finger1.selectOption({label: 'Q'});

            const finger2 = positionsFixture.getSelector('AZERTY', 1);
            await finger2.click();
            await finger2.selectOption({label: 'D'});

            const finger3 = positionsFixture.getSelector('AZERTY', 2);
            await finger3.click();
            await finger3.selectOption({label: 'B'});

            const finger4 = positionsFixture.getSelector('AZERTY', 3);
            await finger4.click();
            await finger4.selectOption({label: 'ESPACE'});

            await positionsFixture.getButton('Tester pour valider').click();
        });

        await test.step('Check if the position is correct', async () => {

            await page.keyboard.down('Q');
            await page.keyboard.down('D');
            await page.keyboard.down('B');
            await page.keyboard.down('Space');

            await page.keyboard.up('Q');
            await page.keyboard.up('D');
            await page.keyboard.up('B');
            await page.keyboard.up('Space');

            await positionsFixture.getButton('Ok').click();
        });
    });
});