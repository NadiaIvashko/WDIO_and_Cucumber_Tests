const Page = require('../page');

class Header extends Page {
    // Селектори
    get signInLink() {
        return $('[data-test="nav-sign-in"]');
    }

    get categoriesLink() {
        return $('.navbar-nav .dropdown-toggle');
    }

    get rentalCategory() {
        return $('.dropdown-menu a[href*="rental"]');
    }

    get cartIcon() {
        return $('[data-test="nav-cart"]');
    }

    get siteLogo() {
        return $('.navbar-brand');
    }

    get contactLink() {
        return $('.nav-link');
    }

    // Методи
    async clickCartIcon() {
        await this.cartIcon.waitForDisplayed({ timeout: 5000 });
        await this.cartIcon.click();
        await browser.pause(2000);
    }

    async clickSignIn() {
        const signIn = await this.signInLink;
        await signIn.waitForDisplayed({ timeout: 5000 });
        await signIn.click();
        await browser.pause(2000);
    }

    async clickCategories() {
        const categories = await this.categoriesLink;
        await categories.waitForDisplayed({ timeout: 5000 });
        await categories.click();
        await browser.pause(2000);
    }

    async selectRentalCategory() {
        await this.rentalCategory.waitForDisplayed({ timeout: 5000 });
        await this.rentalCategory.click();
        await browser.pause(2000);
    }

    async clickSiteLogo() {
        await this.siteLogo.waitForDisplayed({ timeout: 5000 });
        await this.siteLogo.click();
        await browser.pause(2000);
    }

    async clickContact() {
        await this.contactLink.waitForDisplayed({ timeout: 5000 });
        await this.contactLink.click();
        await browser.pause(2000);
    }
}

module.exports = Header;