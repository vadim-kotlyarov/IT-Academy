class LeftMenu {

    set leftMenuButton(menuButtonName) {
        this.locator = `//ul[@class='theme-doc-sidebar-menu menu__list']//a[text()='${menuButtonName}']`;
    };

    get leftMenuButton() {
        return $(this.locator);
    };

    async clickLeftMenuButton(menuButtonName) {
        this.leftMenuButton = menuButtonName;
        await this.leftMenuButton.waitForDisplayed();
        await this.leftMenuButton.click();
        await browser.pause(500);
    };
}

module.exports = new LeftMenu();
