import { getPlatform } from '../utils/platform.js';
import type { Platform } from '../utils/platform.js';

// Import both platform locators
import androidLocators from './android/index.js';
import iosLocators from './ios/index.js';

// Cache the loaded locators
let cachedLocators: typeof androidLocators | null = null;
let cachedPlatform: Platform | null = null;

/**
 * Get locators for the current platform
 * Automatically detects iOS or Android and returns appropriate locators
 */
export async function getLocators() {
  const platform = await getPlatform();
  
  // Return cached locators if platform hasn't changed
  if (cachedLocators && cachedPlatform === platform) {
    return cachedLocators;
  }
  
  // Load platform-specific locators
  if (platform === 'ios') {
    cachedLocators = iosLocators;
  } else {
    cachedLocators = androidLocators;
  }
  
  cachedPlatform = platform;
  console.log(`[Locators] Loaded ${platform.toUpperCase()} locators`);
  
  return cachedLocators;
}

// Export types
export type LocatorKey = keyof typeof androidLocators;
export type { Platform };

// For backward compatibility - direct imports
export { androidLocators, iosLocators };

