const BasePage = require('./basePage');

class CatalogPage extends BasePage {

    constructor(page) {
        super(page);
        this.leftSideBarItems = page.locator('.styles_listContainer__2wnOr span');
        this.categoriesItems = page.locator('.styles_listContainer__lTtK3 span');
    };

    async hoverLeftSideBarItem(itemName) {
        let leftSideBarItem = await this.leftSideBarItems.filter({ hasText: `${itemName}` });
        await leftSideBarItem.scrollIntoViewIfNeeded();
        await leftSideBarItem.hover();
    };

    async clickCategoriesItem(itemName) {
        let categoriesItem = await this.categoriesItems.filter({ hasText: `${itemName}` });
        await categoriesItem.scrollIntoViewIfNeeded();
        await categoriesItem.click();
    };

};

module.exports = CatalogPage;