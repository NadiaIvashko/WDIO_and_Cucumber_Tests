const { Then } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const chai = require('chai');

const CartPage = require('./cart.page');

const cartPage = new CartPage();

Then('Зявляється форма для входу в акаунт', async () => {
    const isLoginContainerDisplayed = await cartPage.isLoginContainerDisplayed();
    
    chai.expect(isLoginContainerDisplayed).to.be.true;
});

Then('Товар видалено з кошика', async () => {
    const isCartEmpty = await cartPage.isCartEmpty();
    
    assert.isTrue(isCartEmpty);
});
