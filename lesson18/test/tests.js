const { Builder, By, until} = require("selenium-webdriver");
const {expect} = require('chai');

describe('Checking chromedriver website', function() {
    let driver;
    beforeEach(async() => {
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().setSize({width: 1980, height: 1260});
        await driver.get('https://chromedriver.chromium.org/home');
    });

    afterEach(async() => {
        await driver.quit();
    });

    it('Checking the change of titles on the chromedriver website', async() => {
        const mainTitleChromeDriver = await driver.findElement(By.css('span.Rn3Z1b'));
        expect(await mainTitleChromeDriver.getText()).to.equal('ChromeDriver');
        const titleChromeExtensions = await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul[1]/child::li[3]//a'));
        await titleChromeExtensions.click();
        const mainTitleChromeExtensions = await driver.findElement(By.css('span.Rn3Z1b'));
        await driver.executeScript("document.querySelector('span.Rn3Z1b').style.backgroundColor = 'green';");
        expect(await mainTitleChromeExtensions.getText()).to.equal('Chrome Extensions');
    });

    it('Checking if the first link contains the word driver', async() => {
        const searchButton = await driver.findElement(By.css('span.Ce1Y1c>svg.vu8Pwe.tCHXDc'));
        await searchButton.click();
        await driver.wait(until.elementsLocated(By.css('input.whsOnd.zHQkBf')), 10000);
        const searchInput = await driver.findElement(By.css('input.whsOnd.zHQkBf'));
        await searchInput.sendKeys('driver\n');
        await driver.wait(until.elementsLocated(By.xpath('//div[@class="vH0yjd"]/a[@data-position="1"]/parent::div')), 10000);
        const firstLink = await driver.findElement(By.xpath('//div[@class="vH0yjd"]/a[@data-position="1"]/parent::div')).getText();
        expect(await firstLink.includes('driver')).to.equal(true);
    });

    it('Check if url contains /mobile-emulation', async() => {
        const advancedTab = await driver.findElement(By.css('li.VsJjtf.oXBWEc a.aJHbb.dk90Ob.jgXgSe.HlqNPb'));
        await advancedTab.click();
        const tabMobileEmulation = await driver.findElement(By.css('li[data-nav-level="2"]>div.PsKE7e.IKA38e.oNsfjf a[data-url="/mobile-emulation"]'));
        await tabMobileEmulation.click();
        await driver.wait(until.elementLocated(By.css('span.Rn3Z1b')), 20000);
        const textUrl = await driver.getCurrentUrl();
        expect(await textUrl.includes('/mobile-emulation')).to.equal(true);
    });
});
