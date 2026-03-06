import type { I18nStrings } from '../../i18n/index.js';

export default function forgotPasswordLocs(s: I18nStrings) {
  return {
    forgotPasswordButton: `~${s.forgotPasswordButton}`,
  } as const;
}
  