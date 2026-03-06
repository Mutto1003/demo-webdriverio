# E2E Testing Guide

This guide covers end-to-end testing for the `demo-webdriverio` mobile testing project.

## Overview

Tests are written using [WebdriverIO](https://webdriver.io/) with [Appium](https://appium.io/) to automate mobile app interactions on Android and iOS.

## Project Structure

```
demo-webdriverio/
├── test/
│   ├── specs/
│   │   ├── sample.ts           # Main mobile test (login flow)
│   │   └── test.e2e.ts         # Legacy web E2E test
│   └── pageobjects/
│       ├── page.ts             # Base page class (web)
│       ├── sample.page.ts      # Page object for mobile screens
│       ├── login.page.ts       # Page object for web login
│       └── secure.page.ts      # Page object for web secure page
├── locs/
│   ├── index.ts                # Auto platform detection + locator loading
│   ├── android/
│   │   ├── index.ts
│   │   └── sample.locs.ts      # XPath selectors for Android
│   └── ios/
│       ├── index.ts
│       └── sample.locs.ts      # Accessibility ID / XPath for iOS
├── utils/
│   └── platform.ts             # getPlatform(), isIOS(), isAndroid()
└── config/
    ├── wdio.shared.conf.ts
    ├── wdio.android.conf.ts
    └── wdio.ios.conf.ts
```

## Running Tests

```bash
# Android
npm run wdio:android

# iOS
npm run wdio:ios

# Default (root config)
npm run wdio
```

## Architecture

### Page Objects (`test/pageobjects/`)

Page Objects encapsulate element interactions per screen.

- **`sample.page.ts`** — Used for mobile tests. Uses `getLocators()` to automatically pick Android or iOS selectors at runtime.
- **`login.page.ts`** / **`secure.page.ts`** — Web-based page objects (legacy `test.e2e.ts` spec).

### Locators (`locs/`)

Selectors are separated by platform:

| Platform | Selector Style |
|---|---|
| Android | XPath e.g. `//android.widget.Button[@content-desc="Continue"]` |
| iOS | Accessibility ID e.g. `~Continue` or XPath via XCUITest |

**Auto-detection** — `locs/index.ts` reads `driver.capabilities.platformName` at runtime and returns the correct platform's locators automatically. The result is cached for the session.

**Adding new locators:**

1. Add the selector to `locs/android/sample.locs.ts` and `locs/ios/sample.locs.ts`
2. The key will be automatically typed as `LocatorKey` for use in page objects

### Platform Utilities (`utils/platform.ts`)

```typescript
import { getPlatform, isIOS, isAndroid } from '../utils/platform.js';

const platform = await getPlatform(); // 'ios' | 'android'
```

## Writing Tests

### New Spec File

Create a file under `test/specs/`:

```typescript
import SamplePage from '../pageobjects/sample.page.js';

describe('Feature Name', () => {
  it('should do something', async () => {
    await SamplePage.click('someButton');
    await SamplePage.type('inputField', 'value');
  });
});
```

### Adding a New Screen

1. Add selectors to `locs/android/sample.locs.ts` and `locs/ios/sample.locs.ts`
2. Create a new page object in `test/pageobjects/<screen-name>.page.ts`
3. Use `getLocators()` and `LocatorKey` for type-safe selector access

### Example Page Object

```typescript
import { $ } from '@wdio/globals';
import { getLocators, type LocatorKey } from '../../locs/index.js';

class MyPage {
  private async el(key: LocatorKey) {
    const locators = await getLocators();
    return $(locators[key]);
  }

  async click(key: LocatorKey) {
    const el = await this.el(key);
    await el.waitForDisplayed({ timeout: 30000 });
    await el.click();
  }
}

export default new MyPage();
```

## Tips

- Use `driver.pause(ms)` sparingly — prefer `waitForDisplayed()` to avoid flaky tests
- Check `appium-inspector.md` to find element locators for new screens
- Appium server starts automatically via `@wdio/appium-service` — no need to start it manually