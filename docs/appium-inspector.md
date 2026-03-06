# Appium Inspector

Use [Appium Inspector](https://github.com/appium/appium-inspector) to explore element hierarchies and find locators for new screens.

## Connecting to Appium Inspector

1. Start the Appium server manually:
   ```bash
   appium
   ```
2. Open Appium Inspector
3. Set **Remote Host**: `127.0.0.1`, **Port**: `4723`, **Path**: `/`
4. Set capabilities matching `config/wdio.android.conf.ts` or `config/wdio.ios.conf.ts`
5. Click **Start Session**

## Android — Get appPackage & appActivity

**Option 1: adb (while app is open)**

```bash
adb shell dumpsys window | grep -E 'mCurrentFocus|mFocusedApp'
```

Example output:
```
mCurrentFocus=Window{... net.svvh.well/net.svvh.well.MainActivity}
```
→ `appPackage`: `net.svvh.well`
→ `appActivity`: `net.svvh.well.MainActivity`

**Option 2: adb package list**

```bash
adb shell pm list packages | grep well
```

## iOS — Get Bundle ID

**From Xcode:**

Open the project in Xcode → select the target → check the Bundle Identifier field.

**From device (with ideviceinstaller):**

```bash
ideviceinstaller -l
```

## Locator Strategy Guide

| Platform | Preferred Strategy | Example |
|---|---|---|
| Android | XPath (UiAutomator2) | `//android.widget.Button[@content-desc="Continue"]` |
| Android | Accessibility ID | `~Continue` |
| iOS | Accessibility ID | `~Continue` |
| iOS | XCUITest XPath | `//XCUIElementTypeButton[@name="Continue"]` |

> 💡 Accessibility ID (`~label`) is preferred when available — it works on both platforms and is faster than XPath.

## Adding Locators to the Project

After finding the selector in Appium Inspector:

1. Add to `locs/android/sample.locs.ts` (Android XPath or Accessibility ID)
2. Add to `locs/ios/sample.locs.ts` (iOS Accessibility ID or XPath)
3. Use the key in page objects via `LocatorKey` type
