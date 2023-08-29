const { test, expect } = require('@playwright/test');
const MainPage = require('../../pageobject/mainPage.js');
const Header = require('../../pageobject/components/header.js');
const LoginModal = require('../../pageobject/components/loginModal.js');
const UserTools = require('../../pageobject/components/userTools.js');
const { credentials } = require('../../utils/model/credentials.js');

test.describe('Prepare authenticated browser state for account tests', () => {
  test.use({ storageState: 'state.json' });

  let mainPage;
  let header;
  let loginModal;
  let userTools;
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    loginModal = new LoginModal(page);
    userTools = new UserTools(page);
  });

  test('Should create authenticated browser state', async ({ page }) => {
    await mainPage.navigate('https://www.21vek.by/');
    await header.clickAccountButton();
    await userTools.clickEnterButton();
    await loginModal.signIn(credentials.validEmail, credentials.validPassword);
    await header.clickAccountButton();
    await expect(await userTools.userToolsSubTitle.textContent()).toEqual('vadimkotlyarov1990@gmail.com');

    await page.context().storageState({ path: 'loginState.json' });
  });
});
