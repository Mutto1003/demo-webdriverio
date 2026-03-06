# Setup Guide

This guide will help you set up the `demo-webdriverio` mobile E2E testing project.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 LTS or 20 LTS
  ```bash
  node --version  # Should be v18.x or v20.x
  ```

- **npm**: Comes with Node.js
  ```bash
  npm --version
  ```

- **Appium**: Version 2.x
  ```bash
  npm install -g appium
  appium --version
  ```

- **Appium Drivers**:
  ```bash
  # For Android
  appium driver install uiautomator2

  # For iOS
  appium driver install xcuitest
  ```

- **Android Setup** (for Android testing):
  - Android Studio + Android SDK
  - A physical Android device or emulator
  - `adb` in PATH
  ```bash
  adb devices  # Should list your device
  ```

- **iOS Setup** (for iOS testing, macOS only):
  - Xcode + Command Line Tools
  - A physical device or simulator

## Installation

### 1. Clone the Repository

```bash
git clone <repo-url>
cd demo-webdriverio
```

### 2. Install Dependencies

```bash
npm install
```

## Project Structure

```
demo-webdriverio/
├── config/
│   ├── wdio.shared.conf.ts     # Shared base configuration
│   ├── wdio.android.conf.ts    # Android-specific configuration
│   └── wdio.ios.conf.ts        # iOS-specific configuration
├── test/
│   ├── specs/                  # Test spec files
│   │   ├── sample.ts           # Sample mobile test
│   │   └── test.e2e.ts         # Web E2E test (legacy)
│   └── pageobjects/            # Page Object Models
│       ├── page.ts             # Base page class
│       ├── sample.page.ts      # Sample page (mobile)
│       ├── login.page.ts       # Login page (web)
│       └── secure.page.ts      # Secure page (web)
├── locs/                       # Locators (selectors)
│   ├── index.ts                # Locator loader (auto platform detect)
│   ├── android/
│   │   ├── index.ts            # Android locator aggregator
│   │   └── sample.locs.ts      # Android selectors for sample screen
│   └── ios/
│       ├── index.ts            # iOS locator aggregator
│       └── sample.locs.ts      # iOS selectors for sample screen
├── utils/
│   └── platform.ts             # Platform detection utility
├── data-test/                  # Test data files
├── i18n/                       # Internationalisation resources
├── docs/                       # Documentation
├── wdio.conf.ts                # Root WDIO configuration
├── tsconfig.json
└── package.json
```

## Running Tests

### Android

Ensure your Android device is connected and `adb devices` shows it, then:

```bash
npm run wdio:android
```

> The device name (`appium:deviceName`) in `config/wdio.android.conf.ts` must match your device's serial number from `adb devices`.

### iOS

Ensure your iOS simulator or device is available, then:

```bash
npm run wdio:ios
```

> Update `appium:deviceName` and `appium:platformVersion` in `config/wdio.ios.conf.ts` to match your target device.

### Root Config (default)

```bash
npm run wdio
```

## Configuration

### Android — `config/wdio.android.conf.ts`

Key caps to update:

| Capability | Description |
|---|---|
| `appium:deviceName` | Serial number from `adb devices` |
| `appium:platformVersion` | Android OS version e.g. `"12"` |
| `appium:appPackage` | App package e.g. `net.svvh.well` |
| `appium:appActivity` | Main activity e.g. `net.svvh.well.MainActivity` |

### iOS — `config/wdio.ios.conf.ts`

| Capability | Description |
|---|---|
| `appium:deviceName` | Device or simulator name e.g. `"iPhone 15 Pro"` |
| `appium:platformVersion` | iOS version e.g. `"17.0"` |
| `appium:bundleId` | App bundle ID e.g. `net.svvh.well` |

## Troubleshooting

### Appium server not starting

Check that Appium is installed and the correct driver is available:

```bash
appium driver list --installed
```

### Device not found

```bash
# Android
adb devices

# iOS — list simulators
xcrun simctl list devices
```

### Cannot connect to device

Make sure the device is unlocked and USB debugging is enabled (Android).
