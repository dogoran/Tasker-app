import * as constants from 'constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const validateTaskForm = (formData) => {
  const errors = {};

  if (!formData.email) {
    errors.email = constants.EMAIL_IS_REQUIRED_MESSAGE;
  }

  if (!constants.emailValidateRegexp.test(formData.email)) {
    errors.email = constants.INVALID_EMAIL_MESSAGE;
  }

  if (!formData.username) {
    errors.username = constants.USERNAME_IS_REQUIRED_MESSAGE;
  }

  if (!formData.text) {
    errors.text = constants.TEXT_IS_REQUIRED_MESSAGE;
  }

  return errors;
};
