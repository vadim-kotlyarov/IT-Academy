const { Key } = require('webdriverio');

class SearchModal {

    get searchModalInput() {
        return $('#docsearch-input');
    };

    get searchHitContainer() {
        return $('.DocSearch-Hit-Container');
    }

    async queryEntry(value) {
        await this.searchModalInput.waitForDisplayed();
        await this.searchModalInput.setValue(value);
        await this.searchHitContainer.waitForExist();
        await browser.keys(Key.Enter);

    }
}

module.exports = new SearchModal();
