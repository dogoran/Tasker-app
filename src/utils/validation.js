import * as constants from 'constants/constants';

// eslint-disable-next-line import/prefer-default-export
export const validateTaskForm = (formData, formType) => {
  const errors = {};

  if (formType === 'CREATE_TASK') {
    if (!formData.email) {
      errors.email = constants.EMAIL_IS_REQUIRED_MESSAGE;
    }

    if (!constants.emailValidateRegexp.test(formData.email)) {
      errors.email = constants.INVALID_EMAIL_MESSAGE;
    }
  }

  if (!formData.username) {
    errors.username = constants.USERNAME_IS_REQUIRED_MESSAGE;
  }

  if (formType !== 'LOGIN_FORM' && !formData.text) {
    errors.text = constants.TEXT_IS_REQUIRED_MESSAGE;
  }

  if (formType === 'LOGIN_FORM' && !formData.password) {
    errors.password = constants.PASSWORD_IS_REQUIRED_MESSAGE;
  }

  return errors;
};
