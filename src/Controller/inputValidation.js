import { regex } from '@/Utils/regex';

export const inputValidation = (e) => {
  if (regex.test(e.target.value)) {
    console.log('The string matches the regex.');
  } else {
    console.log('The string does not match the regex.');
  }
};
