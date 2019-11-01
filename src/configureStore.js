import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import callApi from './utils/callApi';

const configureStore = (initialState = {}) => (
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk.withExtraArgument(callApi),
    ),
  )
);

export default configureStore();
