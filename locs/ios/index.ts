import type { I18nStrings } from '../../i18n/index.ts';
import sampleLocs from './sample.locs.ts';
import forgotPasswordLocs from './forgotPassword.locs.ts';
import signInLocs from './signIn.locs.ts';

export default function iosLocators(s: I18nStrings) {
  return {
    ...sampleLocs(s),
    ...forgotPasswordLocs(s),
    ...signInLocs(s),
  } as const;
}

export type IosLocatorKey = keyof ReturnType<typeof iosLocators>;
