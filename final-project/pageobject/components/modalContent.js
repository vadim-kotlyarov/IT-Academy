class ModalContent {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('input[label="Имя"]');
    this.dateOfBirthInput = page.locator('[label="Дата рождения"]');
    this.confirmationCheckbox = page.getByTestId('agreement');
    this.saveButton = page.locator('.Button-module__button');
    this.phoneNumber = page.locator('[name="phone"]');
    this.ariaLabel = page.locator('[aria-label="city"]');
    this.fitstAria = page.locator('.styles_flexRow__1AUaA');
    this.streetHouse = page.locator('[name="address"]');
    this.fitststreetHouse = page.locator('//ul/li[@role="row"][1]');
    this.entrance = page.locator('[name="entrance"]');
    this.floor = page.locator('[name="floor"]');
    this.flat = page.locator('[name="flat"]');
  }

  async fillingNameInput(name) {
    await this.nameInput.clear();
    await this.nameInput.type(name);
  }

  async fillingDateOfBirthInput(date) {
    await this.dateOfBirthInput.clear();
    await this.dateOfBirthInput.type(date);
  }

  async checkConfirmationCheckbox() {
    await this.confirmationCheckbox.check();
  }

  async clickSaveButton() {
    await this.saveButton.click();
    await this.saveButton.waitFor({ state: 'detached' });
  }

  async fillingPhoneNumber(phoneNumber) {
    await this.phoneNumber.click();
    await this.phoneNumber.type(phoneNumber);
  }

  async fillingAriaLabel(city) {
    await this.ariaLabel.clear();
    await this.ariaLabel.type(city);
    await this.fitstAria.click();
  }

  async fillingStreetHouse(streetHouse) {
    await this.streetHouse.click();
    await this.streetHouse.type(streetHouse);
    await this.fitststreetHouse.waitFor({ state: 'visible' });
    await this.fitststreetHouse.click();
  }

  async fillingEntranceFloorFlat(entrance, floor, flat) {
    await this.entrance.click();
    await this.entrance.type(entrance);
    await this.floor.click();
    await this.floor.type(floor);
    await this.flat.click();
    await this.flat.type(flat);
  }
}

module.exports = ModalContent;
