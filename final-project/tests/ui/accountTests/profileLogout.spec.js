const { test, expect } = require('@playwright/test');
const MainPage = require('../../../pageobject/mainPage.js');
const Header = require('../../../pageobject/components/header.js');
const UserTools = require('../../../pageobject/components/userTools.js');
const ProfileInfoPage = require('../../../pageobject/profileInfoPage.js');

test.describe('Verify profile logout', () => {
  test.use({ storageState: 'loginState.json' });

  let mainPage;
  let header;
  let userTools;
  let profileInfoPage;
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    userTools = new UserTools(page);
    profileInfoPage = new ProfileInfoPage(page);
    await mainPage.navigate('https://www.21vek.by/');
    await header.clickAccountButton();
  });

  test('Verify profile logout from the user tools page', async () => {
    await userTools.clickExit();
    await header.clickAccountButton();
    await expect(userTools.userToolsSubTitle).toBeHidden();
  });

  test('Verify profile logout from the profile info page', async () => {
    await userTools.clickProfileInfo();
    await profileInfoPage.clickExit();
    await header.clickAccountButton();
    await expect(userTools.userToolsSubTitle).toBeHidden();
  });
});
