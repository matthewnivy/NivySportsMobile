import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginYupValidations = yup.object({
  phoneNumber: yup
    .string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid'),
  password: yup.string().required('Password is required'),
});
export const forgotPasswordCode = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  phoneNumber: yup
    .string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string().email().required(),
});
export const signUpYupValidations = yup.object({
  password: yup.string().required('Password is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email().required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  unaRoles: yup.string().required('Select a role'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match'),
});
export const feedBackYupValidations = yup.object({
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
});

export const forgotPasswordYupValidations = yup.object({
  newPassword: yup.string().required('New Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Password must match'),
});

export const resetPasswordYupValidations = yup.object({
  password: yup.string().required('Password is required'),
  newPassword: yup.string().required('New Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Password must match'),
});

export const mobileValidation = yup.object({
  mobileNo: yup
    .string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid'),
});

export const otpCodeValidation = yup.object({
  otpCode: yup.string().required().length(6),
});
