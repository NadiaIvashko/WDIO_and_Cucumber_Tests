const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const Header = require('./header.page');

const header = new Header();

When('Я переходжу на сторінку логування', async () => {
    await header.clickSignIn();
});

When('Я відкриваю меню "Categories"', async () => {
    await header.clickCategories();
});

When('Я обираю категорію "Rental"', async () => {
    await header.selectRentalCategory();
});

When('Я переходжу до кошика', async () => {
    await header.clickCartIcon();
});

When('Я переходжу до вкладки Contact', async () => {
    await header.clickContact();
});

When('Я клікаю на логотип сайту', async () => {
    await header.clickSiteLogo();
});

Then('Я повертаюся на головну сторінку', async () => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe('https://practicesoftwaretesting.com/');
});