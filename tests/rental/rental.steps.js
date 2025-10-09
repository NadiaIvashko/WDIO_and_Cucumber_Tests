const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const HomePage = require('../home/home.page');
const RentalPage = require('./rental.page');

const rentalPage = new RentalPage();

When('Я клікаю на першу доступну техніку', async () => {
    await rentalPage.clickFirstRentalEquipment();
});

When('Я натискаю кнопку "Add to cart" на сторінці техніки', async () => {
    await rentalPage.clickAddToCart();
});

Then('Я бачу повідомлення що послугу додано до кошика', async () => {
    const isAdded = await rentalPage.isProductAddedToCart();
    expect(isAdded).toBe(true);
});
