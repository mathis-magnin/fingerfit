import {test, expect} from '@playwright/test';
import {testUrl} from 'e2e/e2e.config';
import { PositionsFixture } from 'src/app/pages/positions/positions.fixture';

test.describe('Positions creation', () => {

    test('Search wrong position', async ({page}) => {
        await page.goto(testUrl + '/positions');
        
        const positionsFixture = new PositionsFixture(page);
        const nbPositions = await positionsFixture.countPositions();

        const txtCreer = positionsFixture.getByText('Créer une nouvelle position');
        const txtModifier = positionsFixture.getByText('Modifier une position existante');
        expect(txtCreer).toBeVisible();
        expect(txtModifier).toBeVisible();
        expect(await positionsFixture.countPositions()).toBe(nbPositions);

        await test.step('Search wrong position', async () => {
            await positionsFixture.fillInput('Rechercher', 'azertyuiop');
            expect(await positionsFixture.countPositions()).toBe(0);
        });
    });


    test('Create position', async ({page}) => {
        await page.goto(testUrl + '/positions');
        
        const positionsFixture = new PositionsFixture(page);
        const nbPositions = await positionsFixture.countPositions();

        await test.step('Choose right hand', async () => {
            await positionsFixture.clickButton('Créer');
            const txtMain = positionsFixture.getByText('Main travaillée');
            const tstDesc = positionsFixture.getByText('Description de la position');
            expect(txtMain).toBeVisible();
            expect(tstDesc).toBeVisible();

            const selector = positionsFixture.selectInSelector('Main gauche', 'Main droite');
        });

        await test.step('Choose position', async () => {
            await positionsFixture.selectInSelector('AZERTY', 'Q', 0);
            await positionsFixture.selectInSelector('AZERTY', 'D', 1);
            await positionsFixture.selectInSelector('AZERTY', 'B', 2);
            await positionsFixture.selectInSelector('AZERTY', 'ESPACE', 3);

            await positionsFixture.getButton('Tester pour valider').click();
        });

        await test.step('Check if the position is correct', async () => {
            const txtCheck = positionsFixture.getByText('Réussissez la position pour valider sa création');
            expect(txtCheck).toBeVisible();

            await page.keyboard.down('Q');
            await page.keyboard.down('D');
            await page.keyboard.down('B');
            let txtValid = positionsFixture.getByText('La position a bien été ajoutée');
            expect(txtValid).not.toBeVisible();
            await page.keyboard.down('Space');

            await page.keyboard.up('Q');
            await page.keyboard.up('D');
            await page.keyboard.up('B');
            await page.keyboard.up('Space');
            txtValid = positionsFixture.getByText('La position a bien été ajoutée');
            expect(txtValid).toBeVisible();
            await positionsFixture.clickButton('Ok');
        });

        await test.step('Check if the position is created', async () => {
            const txtCreer = positionsFixture.getByText('Créer une nouvelle position');
            const txtModifier = positionsFixture.getByText('Modifier une position existante');
            expect(txtCreer).toBeVisible();
            expect(txtModifier).toBeVisible();

            expect(await positionsFixture.countPositions()).toBe(nbPositions + 1);
            await positionsFixture.fillInput('Rechercher', 'QDB ');
            expect(await positionsFixture.countPositions()).toBe(1);
        });
    });


    test('Modify position', async ({page}) => {
        await page.goto(testUrl + '/positions');
        
        const positionsFixture = new PositionsFixture(page);
        const nbPositions = await positionsFixture.countPositions();
        
        await test.step('Select position', async () => {
            await positionsFixture.fillInput('Rechercher', 'xcfh');
            await positionsFixture.getPosition().click();
        });

        await test.step('Modify position', async () => {
            await positionsFixture.selectInSelector('Main gauche', 'Main droite');

            await positionsFixture.selectInSelector('AZERTY', 'Q', 0);
            await positionsFixture.selectInSelector('AZERTY', 'R', 1);
            await positionsFixture.selectInSelector('AZERTY', 'G', 2);
            await positionsFixture.selectInSelector('12345', 'Non travaillé', 3);
            await positionsFixture.selectInSelector('12345', 'Non travaillé', 4);

            await positionsFixture.clickButton('Tester pour valider');
        });

        await test.step('Check if the position is correct', async () => {

            await page.keyboard.down('X');
            await page.keyboard.down('C');
            await page.keyboard.down('F');
            await page.keyboard.down('H');

            let txtValidModif = positionsFixture.getByText('La position a bien été modifiée');
            expect(txtValidModif).not.toBeVisible();

            await page.keyboard.up('X');
            await page.keyboard.up('C');
            await page.keyboard.up('F');
            await page.keyboard.up('H');

            await page.keyboard.down('Q');
            await page.keyboard.down('R');
            await page.keyboard.down('G');

            txtValidModif = positionsFixture.getByText('La position a bien été modifiée');
            expect(txtValidModif).toBeVisible();

            await page.keyboard.up('Q');
            await page.keyboard.up('R');
            await page.keyboard.up('G');
            await positionsFixture.clickButton('Ok');
        });

        await test.step('Check if the position is modified', async () => {
            await positionsFixture.fillInput('Rechercher', 'qrg');
            expect(await positionsFixture.countPositions()).toBe(1);

            await positionsFixture.fillInput('Rechercher', 'xcfh');
            expect(await positionsFixture.countPositions()).toBe(0);
        });
    });
    

    test('Delete position', async ({page}) => {
        await page.goto(testUrl + '/positions');
        
        const positionsFixture = new PositionsFixture(page);
        const nbPositions = await positionsFixture.countPositions();
        
        await test.step('Create a position', async () => {
            await positionsFixture.clickButton('Créer');

            await positionsFixture.selectInSelector('AZERTY', 'H', 0);
            await positionsFixture.selectInSelector('AZERTY', 'L', 1);

            await positionsFixture.clickButton('Tester pour valider');

            await page.keyboard.down('H');
            await page.keyboard.down('L');

            await page.keyboard.up('H');
            await page.keyboard.up('L');

            const txtValid = positionsFixture.getByText('La position a bien été ajoutée');
            expect(txtValid).toBeVisible();

            await positionsFixture.clickButton('Ok');

            expect(await positionsFixture.countPositions()).toBe(nbPositions + 1);
        });

        await test.step('Delete position', async () => {
            await positionsFixture.fillInput('Rechercher', 'hl');
            await positionsFixture.getPosition().click();

            await positionsFixture.clickButton('Supprimer');
            const txtSupr = positionsFixture.getByText('Êtes-vous sûr de vouloir supprimer cette position ?');
            expect(txtSupr).toBeVisible();
            await positionsFixture.clickButton('Supprimer');
        });

        await test.step('Check if the position is deleted', async () => {
            expect(await positionsFixture.countPositions()).toBe(nbPositions);
            await positionsFixture.getTextInput('Rechercher').fill('hl');
            expect(await positionsFixture.countPositions()).toBe(0);
        });

    });

});