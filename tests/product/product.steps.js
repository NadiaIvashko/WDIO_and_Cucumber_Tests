const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const ProductPage = require('./product.page');
const productPage = new ProductPage();


When('Я натискаю кнопку "Add to cart"', async () => {
    await productPage.clickAddToCart();
});

Then('Товар успішно додано до кошика', async () => {
    const isAdded = await productPage.isProductAddedToCart();
    expect(isAdded).toBe(true);
});
