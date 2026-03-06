import sample from './sample.locs.js'

const Locators = {
  ...sample,
} as const ;

export default Locators;
export type LocatorKey = keyof typeof Locators;

