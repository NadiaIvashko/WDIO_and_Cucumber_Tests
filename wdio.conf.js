exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './tests/**/*.feature'
    ],
    
    exclude: [],
    
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 2,
    
    capabilities: [
        {
            browserName: 'chrome',
            maxInstances: 1,
            'goog:chromeOptions': {
                args: [
                    '--disable-gpu', 
                    '--window-size=1920,1080',
                    '--no-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-web-security',
                    '--disable-features=VizDisplayCompositor'
                ]
            }
        },
        {
            browserName: 'firefox',
            maxInstances: 1,
            'moz:firefoxOptions': {
                args: [
                    '--width=1920',
                    '--height=1080'
                ]
            }
        }
    ],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'error',
    
    bail: 0,
    
    // Base URL для вашого сайту
    baseUrl: 'https://practicesoftwaretesting.com',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    // Налаштування для паралельного виконання
    execArgv: ['--max-old-space-size=4096'],
    
    // Налаштування для стабільності
    restart: false,
    
    // Налаштування повторного виконання тестів
    retry: 2,
    
    // Налаштування таймаутів
    mochaOpts: {
        timeout: 120000
    },
    
    services: [],
    
    framework: 'cucumber',
    
    reporters: ['spec'],

    cucumberOpts: {
        require: [
            './tests/home/home.steps.js',
            './tests/product/product.steps.js',
            './tests/login/login.steps.js',
            './tests/header/header.steps.js',
            './tests/shopping_cart/cart.steps.js',

            './tests/helpers/clickItem.steps.js',
            './tests/helpers/isOnPage.steps.js',
        ],
        
        requireModule: ['@babel/register'],
        
        backtrace: false,
        
        dryRun: false,
        
        failFast: false,
        
        name: [],
        
        snippets: true,
        
        source: true,
        
        strict: false,
        
        tagExpression: '',
        
        timeout: 60000,
        
        ignoreUndefinedDefinitions: false,
        
        // Налаштування повторного виконання тестів
        retry: 2
    },

   
    
}