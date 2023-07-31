const { expect } = require('chai');
const { Key } = require('webdriverio');

describe('Testing website webdriverio', function () {
  beforeEach(async () => {
    await browser.url('https://webdriver.io/');
  });

  it('Verify top bar navigation', async () => {
    const arrayOfTopBarNavigation = [];
    const arrayTitles = [
      'Getting Started',
      'Introduction',
      'Contribute',
      'Need Help?',
      'Become a WebdriverIO Sponsor',
      'TypeScript Support for WebDriver Bidi',
      'Next-gen browser and mobile automation test framework for Node.js'
    ];
    for await (const item of $$('//button[@aria-label="Toggle navigation bar"]/following-sibling::a[position()>1][not(text()="Blog")]')) {
      await item.click();
      await $('//h1').waitForDisplayed();
      const textTitle = await $('//h1').getText();
      await arrayOfTopBarNavigation.push(textTitle);
    }
    await $("div.navbar__items a[href='/blog']").click();
    await $('//h2/a[text()="TypeScript Support for WebDriver Bidi"]').waitForDisplayed();
    const textTitleBlog = await $('//h2/a[text()="TypeScript Support for WebDriver Bidi"]').getText();
    await arrayOfTopBarNavigation.push(textTitleBlog);
    await $('img[alt="WebdriverIO"]').click();
    await $('//p[text()="Next-gen browser and mobile automation test framework for Node.js"]').waitForDisplayed();
    const textTitleHome = await $('//p[text()="Next-gen browser and mobile automation test framework for Node.js"]').getText();
    await arrayOfTopBarNavigation.push(textTitleHome);
    expect(arrayOfTopBarNavigation).to.deep.equal(arrayTitles);
  });

  it('Verify left bar navigation', async () => {
    await $("div.navbar__items a[href='/docs/api']").click();
    await $('//h1').waitForDisplayed();
    const arrayOfReceivedTitles = [];
    const arrayTitles = [
      'Introduction',
      'Protocol Commands',
      'The Browser Object',
      'The Element Object',
      'The Mock Object',
      'Expect',
      'Globals',
      'Environment Variables',
      'Modules'
    ];
    for await (const item of $$('.theme-doc-sidebar-menu>li')) {
      await item.click();
      await browser.pause(500);
      await $('//h1').waitForExist();
      const textTitle = await $('//h1').getText();
      await arrayOfReceivedTitles.push(textTitle);
    }
    expect(arrayOfReceivedTitles).to.deep.equal(arrayTitles);
  });

  it('Verify right contents', async () => {
    await $("div.navbar__items a[href='/docs/api']").click();
    await $("div.menu__list-item-collapsible a[href='/docs/api/browser']").waitForClickable();
    await $("div.menu__list-item-collapsible a[href='/docs/api/browser']").click();
    await $("//a[text()='Properties']").waitForDisplayed();
    await $("//a[text()='Properties']").click();
    await $('//h2[@id="properties"]').waitForDisplayed();
    expect(await $('//h2[@id="properties"]').isDisplayedInViewport()).to.equal(true);

    await $("//a[text()='Methods']").click();
    await $("//*[@id='methods']").waitForDisplayed();
    expect(await $("//*[@id='methods']").isDisplayedInViewport()).to.equal(true);

    await $("//a[text()='Remarks']").click();
    await $('//h2[@id="remarks"]').waitForDisplayed();
    expect(await $('//h2[@id="remarks"]').isDisplayedInViewport()).to.equal(true);
  });

  it('Verify github redirection', async () => {
    await $('a[href="https://github.com/webdriverio/webdriverio"]').click();
    await browser.switchWindow('https://github.com/webdriverio/webdriverio');
    const textUrl = await browser.getUrl();
    expect(await textUrl.includes('github')).to.equal(true);
  });

  it('Verify search input', async () => {
    await $('span.DocSearch-Button-Container').click();
    await $('#docsearch-input').waitForExist();
    const search = await $('#docsearch-input');
    await search.setValue('browser');
    await $('.DocSearch-Hit-Container').waitForExist();
    await browser.keys(Key.Enter);
    await $("//h1[text()='The Browser Object']").waitForExist();
    const searchText = await $("//h1[text()='The Browser Object']").getText();
    expect(await searchText.includes('Browser')).to.equal(true);
  });
});
