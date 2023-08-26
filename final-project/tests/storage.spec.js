const { test, expect } = require ('@playwright/test');

test.describe('First test suite', () => {

    test('Should close cookie overlay', async ({page}) => {
        await page.goto('https://www.21vek.by/');
        await expect(page.locator('#modal-cookie')).toBeVisible();

        await page.locator('//button[@class="Button-module__button Button-module__blue-primary"]').click();
        await expect(page.locator('#modal-cookie')).toBeHidden();

        await expect(page.locator('#popmechanic-form-64749')).toBeVisible();
        await page.locator('.popmechanic-close').click();
        await expect(page.locator('#popmechanic-form-64749')).toBeHidden();

        await page.context().storageState({path: 'state.json'});
    });
})
