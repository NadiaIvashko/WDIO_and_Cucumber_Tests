const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const { assert } = require('chai');
const chai = require('chai');
const should = chai.should();
const expectChai = chai.expect;
const Header = require('./header.page');

const header = new Header();

When('Я переходжу на сторінку логування', async () => {
    await header.clickSignIn();
    
    const currentUrl = await browser.getUrl();
    assert.isTrue(currentUrl.includes('/auth/login'), 'Should be on login page');
});

When('Я відкриваю меню "Categories"', async () => {
    await header.clickCategories();
    
    const categoriesMenu = await header.categoriesLink;
    const isExpanded = await categoriesMenu.getAttribute('aria-expanded');
    isExpanded.should.equal('true');
});

When('Я обираю категорію "Rental"', async () => {
    await header.selectRentalCategory();
    
    const currentUrl = await browser.getUrl();
    expectChai(currentUrl).to.include('/rental');
});

When('Я переходжу до кошика', async () => {
    await header.clickCartIcon();
    
    const currentUrl = await browser.getUrl();
    assert.isTrue(currentUrl.includes('/checkout'), 'Should be on cart page');
});

When('Я переходжу до вкладки Contact', async () => {
    await header.clickContact();

    const contactLink = await header.contactLink;
    const isDisplayed = await contactLink.isDisplayed();
    isDisplayed.should.be.true;
});

When('Я клікаю на логотип сайту', async () => {
    await header.clickSiteLogo();
    
    const currentUrl = await browser.getUrl();
    expectChai(currentUrl).to.equal('https://practicesoftwaretesting.com/');
});

Then('Я повертаюся на головну сторінку', async () => {
    const currentUrl = await browser.getUrl();
    
    expectChai(currentUrl).to.equal('https://practicesoftwaretesting.com/');
    
    currentUrl.should.equal('https://practicesoftwaretesting.com/');
});