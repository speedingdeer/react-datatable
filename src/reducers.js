import { combineReducers } from 'redux';
import { default as home } from './containers/Home/reducer';


const reducers = combineReducers({
  home
});

export default reducers;