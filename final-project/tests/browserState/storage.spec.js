const { test, expect } = require('@playwright/test');
const MainPage = require('../../pageobject/mainPage.js');

test.describe('Close overlays', () => {
  test('Should close cookie overlay', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate('https://www.21vek.by/');

    await expect(mainPage.cookieModal).toBeVisible();
    await mainPage.clickCloseCookieModalButton();
    await expect(mainPage.cookieModal).toBeHidden();
    await expect(mainPage.promoPopupModal).toBeVisible();
    await mainPage.clickClosePromoPopupModalButton();
    await expect(mainPage.promoPopupModal).toBeHidden();

    await page.context().storageState({ path: 'state.json' });
  });
});
