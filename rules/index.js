import { lintRules } from "./lintRules";
import {tsRules}  from './tsRules';
import {prettierRules} from './prettierRules.js';
import {vueRules} from './vueRules';
import {requireParserServicesRules} from "./requireParserServicesRules";
import { noUselessAssignRules } from "./noUselessAssignRules.js"
import { sonarRules } from "./sonarRules.js"
const rules = {
  ...lintRules,
  ...vueRules,
  ...tsRules,
  ...noUselessAssignRules,
  ...sonarRules,
  ...prettierRules,
};
export {
  rules,
  lintRules,
  tsRules,
  prettierRules,
  vueRules,
  noUselessAssignRules,
  sonarRules,
  requireParserServicesRules,
};