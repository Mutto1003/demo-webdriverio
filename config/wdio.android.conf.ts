import { config as sharedConfig } from './wdio.shared.conf.js';
import { deepmerge } from 'deepmerge-ts';

export const config: WebdriverIO.Config = deepmerge(sharedConfig as WebdriverIO.Config, {
    //
    // ============
    // Capabilities - Android
    // ============
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'R58MB3NYXXK', // Your Android device
        'appium:platformVersion': '12',
        'appium:appActivity': 'net.svvh.well.MainActivity',
        'appium:appPackage': 'net.svvh.well',
        'appium:automationName': 'UiAutomator2',
        // Optional: Use app file instead
        // 'appium:app': './app/Android/well.apk',
    }],
    port: 4723,
    path: '/',

    // Enable debug logging
    // logLevel: 'debug' as const,
    // logLevel: 'info' as const,

    //
    // Specs - Android specific tests (optional)
    //
    specs: [
        '../test/specs/**/sample.ts'
    ],

    // Exclude web tests
    exclude: [
        '../test/specs/test.e2e.ts'
    ],
});

