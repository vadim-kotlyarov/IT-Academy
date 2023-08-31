const { test, expect } = require('@playwright/test');
const MainPage = require('../../../pageobject/mainPage.js');
const Header = require('../../../pageobject/components/header.js');
const UserTools = require('../../../pageobject/components/userTools.js');
const ProfileInfoPage = require('../../../pageobject/profileInfoPage.js');
const ModalContent = require('../../../pageobject/components/modalContent.js');
const ConfirmationModal = require('../../../pageobject/components/confirmationModal.js');

test.describe('Verify profile info changes', () => {
  test.use({ storageState: 'loginState.json' });

  let mainPage;
  let header;
  let userTools;
  let profileInfoPage;
  let modalContent;
  let confirmationModal;
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    userTools = new UserTools(page);
    profileInfoPage = new ProfileInfoPage(page);
    modalContent = new ModalContent(page);
    confirmationModal = new ConfirmationModal(page);
    await mainPage.navigate('https://www.21vek.by/');
    await header.clickAccountButton();
    await userTools.clickProfileInfo();
  });

  test('Verify change of name and date of birth', async () => {
    await profileInfoPage.clickChangeName();
    await modalContent.fillingNameInput('Name');
    await modalContent.fillingDateOfBirthInput('11112000');
    await modalContent.checkConfirmationCheckbox();
    await modalContent.clickSaveButton();
    await expect(await (await profileInfoPage.accountName).innerText()).toEqual('Name');
    await expect(await (await profileInfoPage.dateOfBirth).innerText()).toEqual('11.11.2000');
  });

  test('Verify change of phone number', async () => {
    await profileInfoPage.clickDeletePhoneNumber();
    await confirmationModal.clickDeleteButton();
    await profileInfoPage.clickPhoneButton();
    await modalContent.fillingPhoneNumber('291234567');
    await modalContent.checkConfirmationCheckbox();
    await modalContent.clickSaveButton();
    await expect(await (await profileInfoPage.phoneNumber).innerText()).toEqual('+375 (29) 123-45-67');
  });

  test('Verify change of addresss', async () => {
    await profileInfoPage.clickDeleteAddress();
    await confirmationModal.clickDeleteButton();
    await profileInfoPage.clickAddressButton();
    await modalContent.fillingAriaLabel('Гомель');
    await modalContent.fillingStreetHouse('Советская 12');
    await modalContent.fillingEntranceFloorFlat('1', '2', '3');
    await modalContent.checkConfirmationCheckbox();
    await modalContent.clickSaveButton();
    await expect(await (await profileInfoPage.address).innerText()).toEqual('г. Гомель, ул. Советская, д. 12, под. 1, эт. 2, кв./офис 3');
  });
});
