const BasePage = require('./basePage');

class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.cookieModal = page.locator('#modal-cookie');
    this.closeCookieModalButton = page.locator('//button[@class="Button-module__button Button-module__blue-primary"]');
    this.promoPopupModal = page.locator('#popmechanic-form-64749');
    this.closePromoPopupModalButton = page.locator('.popmechanic-close');
  }

  async clickCloseCookieModalButton() {
    await this.closeCookieModalButton.click();
  }

  async clickClosePromoPopupModalButton() {
    await this.closePromoPopupModalButton.click();
  }
}

module.exports = MainPage;
