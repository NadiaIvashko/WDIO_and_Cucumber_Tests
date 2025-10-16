const Page = require('../page');

class RentalPage extends Page {

    get firstRentalEquipment() {
        return $('.card');
    }

    get addToCartButton() {
        return $('#btn-add-to-cart');
    }

    get cartBadge() {
        return $('.badge.bg-primary');
    }

    get successMessage() {
        return $('.alert-success');
    }

    async clickFirstRentalEquipment() {
        await this.firstRentalEquipment.waitForDisplayed({ timeout: 5000 });
        await this.firstRentalEquipment.click();
        await browser.pause(2000);
    }

    async clickAddToCart() {
        await this.addToCartButton.waitForDisplayed({ timeout: 5000 });
        await this.addToCartButton.click();
        await browser.pause(2000);
    }

    async isProductAddedToCart() {
        await browser.pause(2000); // Wait for cart to update
        const badge = await this.cartBadge;
        return await badge.isDisplayed();
    }

    async getCartQuantity() {
        const badge = await this.cartBadge;
        if (await badge.isDisplayed()) {
            const text = await badge.getText();
            return parseInt(text) || 0;
        }
        return 0;
    }

    open(equipmentId) {
        return super.open(`/product/${equipmentId}`);
    }
}

module.exports = RentalPage;