const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const HomePage = require('./home.page');
const homePage = new HomePage();
const userData = require('../data');

Given('Я відкриваю головну сторінку', async () => {
    await homePage.open();
    await browser.maximizeWindow();
});

When('Я клікаю на перший товар зі списку', async () => {
    await homePage.clickFirstProduct();
});

When('Я вводжу слово в поле пошуку', async () => {
    await homePage.enterSearchText(userData.search.text); 
});

When('Я натискаю кнопку пошуку', async () => {
    await homePage.clickSearchButton();
});

Then('Я бачу результати пошуку для вказаного слова', async () => {
    const results = await homePage.getSearchResultsText();
    const found = results.some(item => item.toLowerCase().includes(userData.search.text.toLowerCase()));
    expect(found).toBe(true);
});

When('Я обираю сортування за зростанням ціни', async () => {
    await homePage.selectSortOption('price,asc');
});

Then('Товари відсортовані за зростанням ціни', async () => {
    const priceValues = await homePage.getSortResultPrice();
    
    for (let i = 1; i < priceValues.length; i++) {
        expect(priceValues[i]).toBeGreaterThanOrEqual(priceValues[i - 1]);
    }
});
