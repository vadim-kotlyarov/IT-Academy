const { test, expect } = require('@playwright/test');
const MainPage = require('../../../pageobject/mainPage.js');
const Header = require('../../../pageobject/components/header.js');
const SearchResultsPage = require('../../../pageobject/searchResultsPage.js');
const CatalogPage = require('../../../pageobject/catalogPage.js');
const ComparisonPage = require('../../../pageobject/comparisonPage.js');

test.describe('Verify comparison actions', () => {
  test.use({ storageState: 'state.json' });

  let mainPage;
  let header;
  let searchResultsPage;
  let catalogPage;
  let comparisonPage;
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    header = new Header(page);
    searchResultsPage = new SearchResultsPage(page);
    catalogPage = new CatalogPage(page);
    comparisonPage = new ComparisonPage(page);
    await mainPage.navigate('https://www.21vek.by/');
    await header.clickCatalogButton();
    await catalogPage.hoverLeftSideBarItem('Смартфоны, ТВ и электроника');
    await catalogPage.clickCategoriesItem('Смартфоны Apple');
    await searchResultsPage.addFirstItemToTheComparison();
  });

  test('Verify delete item from the comparison page', async () => {
    await searchResultsPage.clickCompareItemsButton();
    await comparisonPage.clickRemoveFirstItemButon();
    await expect(await (await comparisonPage.informMassage).innerText()).toContain('Не выбрано товаров для сравнения');
  });
});
