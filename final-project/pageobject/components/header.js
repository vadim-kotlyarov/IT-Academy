class Header {
  constructor(page) {
    this.page = page;
    this.accountButton = page.locator('.styles_userToolsToggler__imcSl');
    this.cartButton = page.locator('.headerCart');
    this.catalogButton = page.locator('.styles_catalogButton__1K6kI');
    this.searchInpit = page.locator('#catalogSearch');
  }

  async clickAccountButton() {
    await this.accountButton.click();
  }

  async clickCartButton() {
    await this.cartButton.scrollIntoViewIfNeeded();
    await this.cartButton.click();
  }

  async clickCatalogButton() {
    await this.catalogButton.click();
  }

  async searchByValue(value) {
    await this.searchInpit.click();
    await this.searchInpit.fill(value);
    await this.page.keyboard.down('Enter');
  }
}

module.exports = Header;
