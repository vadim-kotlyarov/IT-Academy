const { test, expect } = require ('@playwright/test');
const MainPage = require('../pageobject/mainPage.js');
const Header = require('../pageobject/components/header.js');
const LoginModal = require('../pageobject/components/loginModal.js');
const UserTools = require('../pageobject/components/userTools.js');
const { credentials } = require ('../utils/model/credentials.js');
const { errorMessage } = require ('../utils/model/errorMessage.js');

test.describe('Login verification for website 21vek.by', () => {

    test.use({storageState: 'state.json'});

    let mainPage;
    let header;
    let loginModal;
    let userTools
    test.beforeEach(async({page}) => {
        mainPage = new MainPage(page);
        header = new Header(page);
        loginModal = new LoginModal(page);
        userTools = new UserTools(page);
        await mainPage.navigate('https://www.21vek.by/');
        await header.clickAccountButton();
        await userTools.clickEnterButton();
    });

    test('Trying to login to website with invalid email and valid password', async() => {
        await loginModal.signIn(credentials.invalidEmail, credentials.validPassword);
        await expect(await loginModal.emailErrorMessage.textContent()).toEqual(errorMessage.invalidEmail);
        
    });

    test('Trying to login to website with valid email and invalid password', async() => {
        await loginModal.signIn(credentials.validEmail, credentials.invalidPassword);
        await expect(await loginModal.passwordErrorMessage.textContent()).toEqual(errorMessage.invalidPassword);
        
    });

    test('Trying to login to website with empty email and empty password', async() => {
        await loginModal.signIn(credentials.emptyEmail, credentials.emptyPassword);
        await expect(await loginModal.emailErrorMessage.textContent()).toEqual(errorMessage.emptyEmail);
        await expect(await loginModal.passwordErrorMessage.textContent()).toEqual(errorMessage.emptyPassword);
    });

    test('Trying to login to website with valid email and valid password', async() => {
        await loginModal.signIn(credentials.validEmail, credentials.validPassword);
        await header.clickAccountButton();
        await expect(await userTools.userToolsSubTitle.textContent()).toEqual(credentials.validEmail);
    });

})
