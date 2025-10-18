const { When } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const loginPage = new LoginPage();

const userData = require('../data/inputs');

When('Я вводжу валідні дані для входу', async () => {
    await loginPage.login(userData.validUser.email, userData.validUser.password);
});
