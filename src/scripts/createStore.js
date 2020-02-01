import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */
export const configureStore = reducer => {
  const middlewares = [thunk];
  return applyMiddleware(...middlewares)(createStore)(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
