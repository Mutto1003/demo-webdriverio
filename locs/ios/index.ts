import type { I18nStrings } from '../../i18n/index.js';
import sampleLocs from './sample.locs.js';

export default function iosLocators(s: I18nStrings) {
  return {
    ...sampleLocs(s),
  } as const;
}

export type IosLocatorKey = keyof ReturnType<typeof iosLocators>;
