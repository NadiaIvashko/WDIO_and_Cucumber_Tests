const Page = require('../page');

class HomePage extends Page {
    // Селектори
    get firstProductImage() {
        return $('.card-img-top');
    }

    get searchInput() {
        return $('#search-query');
    }

    get searchButton() {
        return $('[data-test="search-submit"]');
    }

    get searchResultsTitle() {
        return $$('.card-title');
    }

    get sortDropdown() {
        return $('select[data-test="sort"]');
    }

    get sortWithValue() {
        return (sortOption) => $(`option[value="${sortOption}"]`);
    }

    get filterResultPrice(){
        return $$('[data-test="product-price"]');
    }

    // Методи
    async clickFirstProduct() {
        await this.firstProductImage.waitForDisplayed({ timeout: 5000 });
        await this.firstProductImage.click();
    }

    async enterSearchText(text) {
        await this.searchInput.clearValue();
        await this.searchInput.setValue(text);
    }

    async clickSearchButton() {
        await this.searchButton.click();
        await browser.pause(2000);
    }

    async getSearchResultsText() {
        await browser.pause(1000); // Wait for results to load
        const results = await this.searchResultsTitle;
        const resultTexts = [];
        
        for (let i = 0; i < results.length; i++) {
            const text = await results[i].getText();
            resultTexts.push(text);
        }
        
        return resultTexts;
    }

    async selectSortOption(sortOption) {
        await this.sortDropdown.waitForDisplayed({ timeout: 5000 });
       
        await this.sortDropdown.click();
        await browser.pause(500);
        
        await this.sortWithValue(sortOption).click();
        await browser.pause(2000);
    }

    async getSortResultPrice(){
        const result = await this.filterResultPrice;
        const priceValues = [];
    
        for (let i = 0; i < result.length; i++) {
            const priceText = await result[i].getText();
            const priceValue = parseFloat(priceText.replace(/[^\d.,]/g, '').replace(',', '.'));
            priceValues.push(priceValue);
        }
        return priceValues;
    }

    open() {
        return super.open('/');
    }
}

module.exports = HomePage;