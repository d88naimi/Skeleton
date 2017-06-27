import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as fromAuth from './auth';
import * as fromLang from './lang';

// import { createSelector } from 'reselect'

/**
 * root reduces
 */
export default combineReducers({
  auth: fromAuth.reducer,
  routing: routerReducer,
  lang: fromLang.reducer
});


/**
 * selectors
 */