const BasePage = require('./basePage');

class ComparisonPage extends BasePage {

    constructor(page) {
        super(page);
        this.firstComparisonItem = page.locator('#j-scroll thead div.j-full_info').first();
        this.firstComparisonItemName = page.locator('#j-scroll thead a.mindbox-pr-view').first();
        this.removeFirstItemButon = page.getByRole('link', { name: 'Удалить из сравнения' });
        this.informMassage = page.locator('#content');
        this.messageInCompareLists = page.locator('//div[@class="b-content"]/p');
    };

    async clickRemoveFirstItemButon() {
        await this.firstComparisonItem.hover();
        await this.removeFirstItemButon.click();
    };

};

module.exports = ComparisonPage;
