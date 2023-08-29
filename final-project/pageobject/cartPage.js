const BasePage = require('./basePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartItemName = page.locator('.BasketItem_title__m55zb');
    this.deleteItemButton = page.locator('.styles_reactButton__2olKd').first();
    this.titlePage = page.locator('.BasketTabsScreen_title__2NSA4');
    this.informMassage = page.locator('//div[@class="EmptyBasket_text__2iKar"]');
  }

  async clickDeleteItemButton() {
    await this.deleteItemButton.waitFor({ state: 'visible' });
    await this.deleteItemButton.click();
  }
}

module.exports = CartPage;
