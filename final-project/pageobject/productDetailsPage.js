const BasePage = require('./basePage');

class ProductDetailsPage extends BasePage {
  constructor(page) {
    super(page);
    this.productItemName = page.locator('.content__header h1');
    this.buttonAddToComparison = page.locator('.j-compare');
    this.compareItemButton = page.locator('.cr-compare__result');
    this.cartButton = page.locator('.g-buybtn').first();
  }

  async clickAddToCompareButton() {
    await this.buttonAddToComparison.click();
  }

  async clickCompareItemsButton() {
    await this.compareItemButton.waitFor({ state: 'visible' });
    await this.compareItemButton.click();
  }

  async clickCartButton() {
    await this.cartButton.click();
  }
}

module.exports = ProductDetailsPage;
