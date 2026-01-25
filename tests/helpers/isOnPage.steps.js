const { When } = require('@wdio/cucumber-framework');
const { assert } = require('chai');

const data = require('../data');

const pageMap = {
    'home': async (currentUrl) => {
        assert.isTrue(currentUrl.includes(data.urls.home));
    },
    'login': async (currentUrl) => {
        assert.isTrue(currentUrl.includes(data.urls.login));
    },
    'product': async (currentUrl) => {
        assert.isTrue(currentUrl.includes(data.urls.product));
    },
    'cart': async (currentUrl) => {
        assert.isTrue(currentUrl.includes(data.urls.cart));
    },
    'contact': async (currentUrl) => {
        assert.isTrue(currentUrl.includes(data.urls.contact));
    },
    'rental': async (currentUrl) => {
        assert.isTrue(currentUrl.includes(data.urls.rental));
    },
    'checkout': async (currentUrl) => {
        assert.isTrue(currentUrl.includes(data.urls.checkout));
    },
    'account': async (currentUrl) => {
        assert.isTrue(currentUrl.includes(data.urls.account));
    },
};


async function isOnPage(page) {
    const pageFunction = pageMap[page];
    
    if (!pageFunction) {
        throw new Error(`No page found with name: "${page}". Available pages: ${Object.keys(pageMap).join(', ')}`);
    }
    
    await browser.waitUntil(
        async () => {
            const currentUrl = await browser.getUrl();
            try {
                await pageFunction(currentUrl);
                return true;
            } catch (error) {
                return false;
            }
        },
        { 
            timeout: 10000, 
            timeoutMsg: `Did not reach ${page} page within 10 seconds` 
        }
    );
}

When('Я знаходжуся на сторінці {string}', async (page) => {
    await isOnPage(page);
});
