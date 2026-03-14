export const config: Partial<WebdriverIO.Config> = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    port: 4723,
    path: '/',
    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        '../test/specs/**/signInMobile.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    //
    // ============
    // Capabilities
    // ============
    maxInstances: 1, // Run one platform at a time
    // Note: capabilities should be defined in platform-specific configs
    // (wdio.android.conf.ts, wdio.ios.conf.ts)
    
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    //
    // Test runner services
    //
    services: ['appium', 'visual'],

    //
    // Framework
    //
    framework: 'mocha',
    
    //
    // Test reporter
    //
    reporters: ['spec'],

    //
    // Mocha Options
    //
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}

