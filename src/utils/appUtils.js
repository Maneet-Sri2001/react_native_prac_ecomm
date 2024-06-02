/* eslint-disable prettier/prettier */
import Snackbar from 'react-native-snackbar';
import { colorScheme, fonts } from './constants';

const maskMobile = (mobileNum) => {
  const cleaned = ('' + mobileNum).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return cleaned;
};

const maskOTP = (otp) => {
  const cleaned = ('' + otp).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})$/);
  if (match) {
    return `${match[1]}-${match[2]}`;
  }
  return cleaned;
};

const showSnackBar = (message, isError = false) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
    fontFamily: fonts.medium,
    textColor: isError ? colorScheme.errorText : colorScheme.successText,
    backgroundColor: isError ? colorScheme.errorBackground : colorScheme.successBg,
  });
};

export {maskMobile, maskOTP, showSnackBar};
