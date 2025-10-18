const { When } = require('@wdio/cucumber-framework');
const { assert } = require('chai');

const Header = require('./header.page');

const header = new Header();

When('Я відкриваю меню "Categories"', async () => {
    await header.clickCategories();
    
    const categoriesMenu = await header.categoriesLink;
    const isExpanded = await categoriesMenu.getAttribute('aria-expanded');
    assert.equal(isExpanded, 'true');
});