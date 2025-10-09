const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const LoginPage = require('./login.page');
const loginPage = new LoginPage();

const userData = require('../data');

When('Я вводжу валідні дані для входу', async () => {
    await loginPage.login(userData.validUser.email, userData.validUser.password);
});

Then('Я успішно залогінений в системі', async () => {
    const url = await browser.getUrl();
    expect(url).toContain('/account');
});
