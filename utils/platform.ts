/**
 * Platform detection utility
 * Detects the current platform (iOS or Android) from driver capabilities
 */

export type Platform = 'ios' | 'android';

/**
 * Get the current platform from driver capabilities
 */
export async function getPlatform(): Promise<Platform> {
  const capabilities = await driver.capabilities;
  const platformName = capabilities.platformName?.toLowerCase();
  
  if (platformName === 'ios') {
    return 'ios';
  } else if (platformName === 'android') {
    return 'android';
  }
  
  throw new Error(`Unknown platform: ${platformName}`);
}

/**
 * Check if current platform is iOS
 */
export async function isIOS(): Promise<boolean> {
  return (await getPlatform()) === 'ios';
}

/**
 * Check if current platform is Android
 */
export async function isAndroid(): Promise<boolean> {
  return (await getPlatform()) === 'android';
}

