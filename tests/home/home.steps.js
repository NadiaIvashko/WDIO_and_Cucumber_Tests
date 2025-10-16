const { Given, When, Then } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const chai = require('chai');
const expectChai = chai.expect;
const HomePage = require('./home.page');
const homePage = new HomePage();
const userData = require('../data');

Given('Я відкриваю головну сторінку', async () => {
    await homePage.open();
    await browser.maximizeWindow();
    
    const pageTitle = await browser.getTitle();
    assert.isNotEmpty(pageTitle, 'Page title should not be empty');
});

When('Я клікаю на перший товар зі списку', async () => {
    await homePage.clickFirstProduct();
});

When('Я вводжу слово в поле пошуку', async () => {
    await homePage.enterSearchText(userData.search.text);
    
    const searchValue = await homePage.searchInput.getValue();
    expectChai(searchValue).to.equal(userData.search.text);
});

When('Я натискаю кнопку пошуку', async () => {
    const searchButton = await homePage.searchButton;
    const isButtonDisplayed = await searchButton.isDisplayed();
    assert.isTrue(isButtonDisplayed, 'Search button should be displayed');

    await homePage.clickSearchButton();
});

Then('Я бачу результати пошуку для вказаного слова', async () => {
    const results = await homePage.getSearchResultsText();
    const found = results.some(item => item.toLowerCase().includes(userData.search.text.toLowerCase()));
    
    expectChai(found).to.be.true;
    
});

When('Я обираю сортування за зростанням ціни', async () => {
    await homePage.selectSortOption('price,asc');
    
    const selectedValue = await homePage.sortDropdown.getValue();
    selectedValue.should.equal('price,asc');
});

Then('Товари відсортовані за зростанням ціни', async () => {
    const priceValues = await homePage.getSortResultPrice();
    
    for (let i = 1; i < priceValues.length; i++) {
        assert.isAtLeast(priceValues[i], priceValues[i - 1], `Price at index ${i} should be >= price at index ${i-1}`);
    }
    
    expectChai(priceValues).to.be.an('array');
});
