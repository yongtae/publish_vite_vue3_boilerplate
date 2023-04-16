import { validate, defineRule } from 'vee-validate';
import {
  required,
  email,
  ext,
  url,
  length,
  max,
  min,
} from '@vee-validate/rules';
// 사용될 룰 셋팅
defineRule('required', required);
defineRule('email', email);
defineRule('ext', ext);
defineRule('url', url);
defineRule('length', length);
defineRule('max', max);
defineRule('min', min);

// let dd = { alphaValidator as alpha,
//   alphaDashValidator as alpha_dash,
//   alphaNumValidator as alpha_num,
//   alphaSpacesValidator as alpha_spaces,
//   betweenValidator as between,
//   confirmedValidator as confirmed,
//   all as default,
//   digitsValidator as digits,
//   dimensionsValidator as dimensions,
//   emailValidator as email,
//   extValidator as ext,
//   imageValidator as image,
//   integerValidator as integer,
//   isValidator as is,
//   isNotValidator as is_not,
//   lengthValidator as length,
//   maxLengthValidator as max,
//    maxValueValidator as max_value,
//    mimesValidator as mimes,
//    minValidator as min,
//    minValueValidator as min_value,
//    notOneOfValidator as not_one_of,
//    numericValidator as numeric,
//    oneOfValidator as one_of,
//    regexValidator as regex,
//    requiredValidator as required,
//    sizeValidator as size, toTypedSchema,
//    urlValidator as url };

const ins = {
  _validate: () => {
    return validate;
  },
};

export default ins;
