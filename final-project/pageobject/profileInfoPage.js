const BasePage = require('./basePage');

class ProfileInfoPage extends BasePage {
  constructor(page) {
    super(page);
    this.changeName = page.locator('//div[@data-testid="editData"]');
    this.phoneButton = page.getByRole('button', { name: 'Добавить' }).first();
    this.addressButton = page.getByRole('button', { name: 'Добавить' }).nth(1);
    this.legalDetails = page.getByRole('button', { name: 'Добавить' }).nth(2);
    this.accountName = page.locator('.styles_data__pQwbB').first();
    this.dateOfBirth = page.locator('.styles_data__pQwbB').nth(2);
    this.phoneNumber = page.locator('.styles_data__pQwbB').last();
    this.address = page.locator('.styles_address__3cQux').first();
    this.buttonDeletePhoneNumber = page.locator('.styles_deleteIconWrapper__2IgwD > svg').first();
    this.buttonDeleteAddress = page.locator('div:nth-child(6) > .styles_dataWrapper__866dE > .styles_actionWrapper__3y7ua > .styles_deleteIconWrapper__2IgwD > svg');
    this.exit = page.getByRole('link', { name: 'Выход' });
  }

  async clickChangeName() {
    await this.changeName.click();
  }

  async clickPhoneButton() {
    await this.phoneButton.click();
  }

  async clickAddressButton() {
    await this.addressButton.click();
  }

  async clickLegalDetails() {
    await this.legalDetails.click();
  }

  async clickAddressButton() {
    await this.addressButton.click();
  }

  async clickDeletePhoneNumber() {
    await this.buttonDeletePhoneNumber.click();
  }

  async clickDeleteAddress() {
    await this.buttonDeleteAddress.scrollIntoViewIfNeeded();
    await this.buttonDeleteAddress.click();
  }

  async clickExit() {
    await this.exit.click();
  }
}

module.exports = ProfileInfoPage;
