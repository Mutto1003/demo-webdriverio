import type { I18nStrings } from '../../i18n/index.js';
import sampleLocs from './sample.locs.js';
import forgotPasswordLocs from './forgotPassword.locs.js';

export default function androidLocators(s: I18nStrings) {
  return {
    ...sampleLocs(s),
    ...forgotPasswordLocs(s),

  } as const;
}

export type AndroidLocatorKey = keyof ReturnType<typeof androidLocators>;
