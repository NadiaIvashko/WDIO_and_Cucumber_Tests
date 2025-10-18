const Page = require('../page');
const data = require('../data');

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
    }

    async getSearchResultsText() {
        let results;
        await browser.waitUntil(
            async () => {
                results = await this.searchResultsTitle;
                return results.length > 0;
            },
            { 
                timeout: 10000, 
                timeoutMsg: 'Search results did not appear' 
            }
        );
        
        const resultTexts = [];
        
        for (let i = 0; i < results.length; i++) {
            try {
                const text = await results[i].getText();
                resultTexts.push(text);
            } catch (error) {
                console.log(`Element at index ${i} no longer exists, skipping`);
            }
        }
        
        return resultTexts;
    }

    async selectSortOption(sortOption) {
        await this.sortDropdown.waitForDisplayed({ timeout: 5000 });
       
        await this.sortDropdown.click();
        
        await this.sortWithValue(sortOption).click();
    }

    async getSortResultPrice(){
        await browser.waitUntil(
            async () => {
                const result = await this.filterResultPrice;
                return result.length >= 2;
            },
            { 
                timeout: 15000, 
                timeoutMsg: 'Price elements did not appear' 
            }
        );
        
        const result = await this.filterResultPrice;
        const priceValues = [];
    
        for (let i = 0; i < Math.min(2, result.length); i++) {
            const priceText = await result[i].getText();
            const priceValue = parseFloat(priceText.replace(/[^\d.,]/g, '').replace(',', '.'));
            priceValues.push(priceValue);
        }
        return priceValues;
    }

    open() {
        return super.open(data.urls.home);
    }
}

module.exports = HomePage;