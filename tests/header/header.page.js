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
        return $('[data-test="nav-contact"]');
    }

    // Методи
    async clickCartIcon() {
        await this.cartIcon.waitForDisplayed({ timeout: 5000 });
        await this.cartIcon.click();
    }

    async clickSignIn() {
        const signIn = await this.signInLink;
        await signIn.waitForDisplayed({ timeout: 5000 });
        await signIn.click();
    }

    async clickCategories() {
        const categories = await this.categoriesLink;
        await categories.waitForDisplayed({ timeout: 5000 });
        await categories.click();
    }

    async selectRentalCategory() {
        await this.rentalCategory.waitForDisplayed({ timeout: 5000 });
        await this.rentalCategory.click();
    }

    async clickSiteLogo() {
        await this.siteLogo.waitForDisplayed({ timeout: 5000 });
        await this.siteLogo.click();
    }

    async clickContact() {
        await this.contactLink.waitForDisplayed({ timeout: 5000 });
        await this.contactLink.click();
    }
}

module.exports = Header;