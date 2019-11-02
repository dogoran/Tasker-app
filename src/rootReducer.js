import { combineReducers } from 'redux';

import tasks from './features/Tasks/reducer';
import auth from './features/LoginPage/reducer';

export default combineReducers({
  tasks,
  auth,
});
