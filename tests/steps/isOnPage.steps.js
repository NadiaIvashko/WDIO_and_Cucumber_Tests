const { When } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const urlData = require('../data/urls');

function isOnPage(currentUrl, pageName) {
    const expectedUrl = urlData.urls[pageName];
    
    if (!expectedUrl) {
        throw new Error(`Page "${pageName}" not found in urlData.urls. Available: ${Object.keys(urlData.urls).join(', ')}`);
    }
    return currentUrl.includes(expectedUrl);
}

async function checkIsOnPage(page) {
    let finalUrl;
    
    await browser.waitUntil(
        async () => {
            const currentUrl = await browser.getUrl();
            finalUrl = currentUrl;
            
            try {
                return isOnPage(currentUrl, page);
            } catch (error) {
                return false;
            }
        },
        { 
            timeout: 10000, 
            timeoutMsg: `Did not reach "${page}" page within 10 seconds` 
        }
    );
    
    return finalUrl;
}

When('Я знаходжуся на сторінці {string}', async (page) => {
    const currentUrl = await checkIsOnPage(page);
    const expectedUrl = urlData.urls[page];
    
    assert.isTrue(
        currentUrl.includes(expectedUrl),
        `Expected to be on "${page}" page with URL containing "${expectedUrl}", but got "${currentUrl}"`
    );
});

module.exports = { isOnPage, checkIsOnPage };
