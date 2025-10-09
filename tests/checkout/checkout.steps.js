const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const HomePage = require('../home/home.page');
const ProductPage = require('../product/product.page');
const CartPage = require('./cart.page');

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

// Common steps
Given('Я відкриваю головну сторінку', async () => {
    await homePage.open();
    await browser.maximizeWindow();
});

When('Я додаю товар до кошика', async () => {
    // Клікаємо на перший товар
    await homePage.clickFirstProduct();
    
    // Додаємо товар до кошика
    await productPage.clickAddToCart();
    
    // Чекаємо трохи для оновлення кошика
    await browser.pause(2000);
});

When('Я переходжу до кошика', async () => {
    await cartPage.clickCartIcon();
});

When('Я натискаю кнопку "Checkout"', async () => {
    await cartPage.clickProceedToCheckout();
});

Then('Мене перенаправляє на сторінку входу', async () => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('/auth/login');
});
