class RightContentsMenu {

    set rightMenuButton(menuButtonName) {
        this.locator = `//a[@class='table-of-contents__link toc-highlight'][text()='${menuButtonName}']`;
    };

    get rightMenuButton() {
        return $(this.locator);
    };

    async clickRightMenuButton(menuButtonName) {
        this.rightMenuButton = menuButtonName;
        await this.rightMenuButton.waitForDisplayed();
        await this.rightMenuButton.click();
        await browser.pause(500);
    };
}

module.exports = new RightContentsMenu();
