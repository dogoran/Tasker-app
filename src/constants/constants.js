export const SERVER_API_URL = 'https://uxcandy.com/~shapoval/test-task-backend/v2';
export const DEVELOPER_API_KEY = 'andriimashevskyi';

export const ITEMS_PER_PAGE = 3;

// eslint-disable-next-line no-useless-escape
export const emailValidateRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };

  return text.replace(/[&<>"']/g, (m) => map[m]);
};

export const INVALID_EMAIL_MESSAGE = 'Incorrect email';
export const EMAIL_IS_REQUIRED_MESSAGE = 'Email is required';
export const USERNAME_IS_REQUIRED_MESSAGE = 'Username is required';
export const TEXT_IS_REQUIRED_MESSAGE = 'Task description is required';
export const PASSWORD_IS_REQUIRED_MESSAGE = 'Password is required';
