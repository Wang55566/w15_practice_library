import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import bookReducer from './bookReducer';
const logger = require("redux-logger").default;


const rootReducer = combineReducers({
  books: bookReducer
});

let enhancer;

if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) : compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = preloadedState => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
