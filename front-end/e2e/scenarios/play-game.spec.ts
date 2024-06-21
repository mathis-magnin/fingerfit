import { test, expect } from '@playwright/test';
import { testUrl } from 'e2e/e2e.config';

import { ProfilesFixture } from 'src/app/pages/profiles/profiles.fixture';
import { CongratsFixture } from 'src/app/pages/congrats/congrats.fixture';
import { OptionsFixture } from 'src/app/pages/options/options.fixture';
import { GameFixture } from 'src/app/pages/game/game.fixture';


test.describe("Play game scenario", () => {
    test("Basic test", async ({ page }) => {
        await page.goto(testUrl + "/profiles");

        await test.step("Profiles page", async () => {
            const profilesFixture = new ProfilesFixture(page);

            await profilesFixture.fillSearchBar("Jean Jean");
            await profilesFixture.clickPlayButton();
        });

        await test.step("Game options page", async () => {
            const optionsFixture = new OptionsFixture(page);

            await optionsFixture.SetListFilterSelector("Deux mains");
            await optionsFixture.fillListSearchBar("Test");
            await optionsFixture.clickListItem("Test");
            await optionsFixture.clickAllAtOnceButton();
            await optionsFixture.clickNoMesureButton();
            await optionsFixture.clickCountdownButton();
            await optionsFixture.fillCountdownInput("30");
            await optionsFixture.clickPlayButton();
        });

        await test.step("Game page", async () => {
            const gameFixture = new GameFixture(page);

            for (let key of gameFixture.getAllKeys()) {
                if ((key == "V") || (key == "R") || (key == "S")) {
                    expect(gameFixture.getKey(key as string).isVisible());
                }
                else {
                    expect(gameFixture.getKey(key as string).isHidden());
                }
            }

            await page.keyboard.down("A");

            expect(gameFixture.getKey("A").isVisible());

            await page.keyboard.up("A");

            await page.keyboard.down("V");
            await page.keyboard.down("R");
            await page.keyboard.down("S");
            await page.keyboard.up("V");
            await page.keyboard.up("R");
            await page.keyboard.up("S");

            for (let key of gameFixture.getAllKeys()) {
                if ((key == "C") || (key == "X") || (key == "F") || (key == "H") || (key == "Space")) {
                    expect(gameFixture.getKey(key as string).isVisible());
                }
                else {
                    expect(gameFixture.getKey(key as string).isHidden());
                }
            }

            await page.keyboard.down("C");
            await page.keyboard.down("X");

            await gameFixture.clickPauseButton();

            for (let key of gameFixture.getAllKeys()) {
                expect(gameFixture.getKey(key as string).isHidden());
            }

            await gameFixture.clickResumePopUpButton();

            for (let key of gameFixture.getAllKeys()) {
                if ((key == "C") || (key == "X") || (key == "F") || (key == "H") || (key == "Space")) {
                    expect(gameFixture.getKey(key as string).isVisible());
                }
                else {
                    expect(gameFixture.getKey(key as string).isHidden());
                }
            }

            await page.keyboard.down("F");
            await page.keyboard.down("H");
            await page.keyboard.down("Space");
            await page.keyboard.up("C");
            await page.keyboard.up("X");
            await page.keyboard.up("F");
            await page.keyboard.up("H");
            await page.keyboard.up("Space");
        });

        await test.step("Congrats page", async () => {
            const congratsFixture = new CongratsFixture(page);

            expect(congratsFixture.getLeaveButton().isVisible());
            expect(congratsFixture.getReplayButton().isVisible());

            expect(congratsFixture.getLeavePopUpButton().isHidden());
            expect(congratsFixture.getPasswordPopUpInput().isHidden());
            expect(congratsFixture.getConnectPopUpButton().isHidden());

            await congratsFixture.clickLeaveButton();

            expect(congratsFixture.getLeaveButton().isHidden());
            expect(congratsFixture.getReplayButton().isHidden());

            expect(congratsFixture.getLeavePopUpButton().isVisible());
            expect(congratsFixture.getPasswordPopUpInput().isVisible());
            expect(congratsFixture.getConnectPopUpButton().isVisible());

            await congratsFixture.fillPasswordPopUpInput("admin");
            await congratsFixture.clickConnectPopUpButton();
        });
    });
})