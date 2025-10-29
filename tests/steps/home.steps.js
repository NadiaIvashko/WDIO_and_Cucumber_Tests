const { Given, When, Then } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const chai = require('chai');

const HomePage = require('../pages/home.page');
const homePage = new HomePage();

const userData = require('../data/inputs');

Given('Я відкриваю головну сторінку', async () => {
    await homePage.open();
    await browser.maximizeWindow();
    
    const pageTitle = await browser.getTitle();
    assert.isNotEmpty(pageTitle, 'Page title should not be empty');
});

When('Я вводжу слово в поле пошуку', async () => {
    await homePage.enterSearchText(userData.search.text);
    
    const searchValue = await homePage.searchInput.getValue();
    chai.expect(searchValue).to.equal(userData.search.text);
});

Then('Я бачу результати пошуку для вказаного слова', async () => {
    const results = await homePage.getSearchResultsText();
    const found = results.some(item => item.toLowerCase().includes(userData.search.text.toLowerCase()));
    
    chai.expect(found).to.be.true;
});

When('Я обираю сортування за зростанням ціни', async () => {
    await homePage.selectSortOption('price,asc');
    
    const selectedValue = await homePage.sortDropdown.getValue();
    chai.expect(selectedValue).to.equal('price,asc');
});

Then('Товари відсортовані за зростанням ціни', async () => {
    await browser.waitUntil(
        async () => {
            const priceValues = await homePage.getSortResultPrice();
            
            if (priceValues.length >= 2) {
                return priceValues[1] >= priceValues[0];
            }
            return false;
        },
        { 
            timeout: 20000, 
            timeoutMsg: 'Products were not sorted by ascending price within 20 seconds' 
        }
    );
    
    const priceValues = await homePage.getSortResultPrice();
    
    assert.isAtLeast(priceValues[1], priceValues[0], 'Second price should be >= first price');
    
    chai.expect(priceValues).to.be.an('array');
});
