const { test, expect } = require ('@playwright/test');
const MainPage = require('../pageobject/mainPage.js');
const Header = require('../pageobject/components/header.js');
const ComparisonPage = require('../pageobject/comparisonPage.js');
const UserTools = require('../pageobject/components/userTools.js');

test.describe('Verify navigate to the cart', () => {

    test.use({storageState: 'state.json'});

    let mainPage;
    let header;
    let comparisonPage;
    let userTools;
    test.beforeEach(async({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        comparisonPage = new ComparisonPage(page);
        userTools = new UserTools(page);
        await mainPage.navigate('https://www.21vek.by/');
    });

    test('Verify navigate to the comparison from user tools', async() => {
        await header.clickAccountButton();
        await userTools.clickComparisonLists();
        await expect(await comparisonPage.messageInCompareLists.textContent()).toEqual('У вас нет списков сравнения'); 
    });

});
