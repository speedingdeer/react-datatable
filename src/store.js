import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

var middlewares = []; 

if(process.env.NODE_ENV !== 'prod') {
  middlewares.push(createLogger()); // neat middleware that logs actions
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)

export default store;