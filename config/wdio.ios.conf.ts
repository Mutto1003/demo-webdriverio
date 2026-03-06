import { config as sharedConfig } from './wdio.shared.conf.js';
import { deepmerge } from 'deepmerge-ts';

export const config: WebdriverIO.Config = deepmerge(sharedConfig as WebdriverIO.Config, {
    //
    // ============
    // Capabilities - iOS
    // ============
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 15 Pro', // Your iOS device/simulator
        'appium:platformVersion': '17.0',
        'appium:automationName': 'XCUITest',
        'appium:bundleId': 'net.svvh.well', // Your iOS bundle ID
        // Optional: Use app file instead
        // 'appium:app': './app/iOS/well.app',

        // For real device, add:
        // 'appium:udid': 'YOUR_DEVICE_UDID',
        // 'appium:xcodeOrgId': 'YOUR_TEAM_ID',
        // 'appium:xcodeSigningId': 'iPhone Developer',
    }],

    //
    // Specs - iOS specific tests (optional)
    //
    specs: [
        '../test/specs/**/sample.ts'
    ],
});

