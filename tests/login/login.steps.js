const { When } = require('@wdio/cucumber-framework');

const LoginPage = require('./login.page');
const loginPage = new LoginPage();

const userData = require('../data');

When('Я вводжу валідні дані для входу', async () => {
    await loginPage.login(userData.validUser.email, userData.validUser.password);
});
