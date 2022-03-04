import { createStore, compose } from 'redux';
import { rootReducer } from '../redux/rootReducer';
export const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
