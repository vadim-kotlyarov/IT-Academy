const BasePage = require('./basePage');

class SearchResultsPage extends BasePage {
  constructor(page) {
    super(page);
    this.resultItemName = '.result__name';
    this.resultItem = '.result__item dl';
    this.compareItemsButton = '.compare__link';
  }

  async getAllResultItems() {
    await this.page.waitForSelector(this.resultItemName);
    return await this.page.locator(this.resultItemName).all();
  }

  async getFirstResultItemName() {
    await this.page.waitForSelector(this.resultItem);
    return await this.page.locator(this.resultItem + ' .result__name').first();
  }

  async addFirstResultItemToTheCart() {
    await this.page.waitForSelector(this.resultItem);
    const cartButton = await this.page.locator(this.resultItem + ' button').first();
    await cartButton.scrollIntoViewIfNeeded();
    await cartButton.click();
  }

  async addFirstItemToTheComparison() {
    await this.page.waitForSelector(this.resultItem);
    const comparisonLink = await this.page.locator(this.resultItem + ' .compare__link').first();
    await comparisonLink.scrollIntoViewIfNeeded();
    await comparisonLink.click();
  }

  async clickCompareItemsButton() {
    await this.page.waitForSelector(this.compareItemsButton);
    const compareItemsButton = await this.page.locator(this.compareItemsButton).first();
    await compareItemsButton.click();
  }

  async clickFirstResultItemName() {
    const firstResultItemName = await this.page.locator(this.resultItemName).first();
    await firstResultItemName.scrollIntoViewIfNeeded();
    await firstResultItemName.click();
  }
}

module.exports = SearchResultsPage;
