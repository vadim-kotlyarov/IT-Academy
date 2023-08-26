const { test, expect } = require ('@playwright/test');
const MainPage = require('../../pageobject/mainPage.js');
const Header = require('../../pageobject/components/header.js');
const CartPage = require('../../pageobject/cartPage.js');
const UserTools = require('../../pageobject/components/userTools.js');

test.describe('Verify navigate to the cart', () => {

    test.use({storageState: 'state.json'});

    let mainPage;
    let header;
    let cartPage;
    let userTools;
    test.beforeEach(async({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        cartPage = new CartPage(page);
        userTools = new UserTools(page);
        await mainPage.navigate('https://www.21vek.by/');
    });

    test('Verify navigate to the cart from header button', async() => {
        await header.clickCartButton();
        await expect(await cartPage.titlePage.textContent()).toEqual('Корзина'); 
    });

    test('Verify navigate to the cart from user tools', async() => {
        await header.clickAccountButton();
        await userTools.clickCartButton();
        await expect(await cartPage.titlePage.textContent()).toEqual('Корзина'); 
    });

});
