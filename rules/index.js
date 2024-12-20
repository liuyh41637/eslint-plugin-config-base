import { lintRules } from "./lintRules";
import {tsRules}  from './tsRules';
import {prettierRules} from './prettierRules.js';
import {vueRules} from './vueRules';
import {requireParserServicesRules} from "./requireParserServicesRules";
const rules = {
  ...lintRules,
  ...vueRules,
  ...tsRules,
  ...prettierRules,
};
export {
  rules,
  lintRules,
  tsRules,
  prettierRules,
  vueRules,
  requireParserServicesRules,
};