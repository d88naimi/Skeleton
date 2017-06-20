import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as fromAuth from './auth';
// import { createSelector } from 'reselect'

/**
 * root reduces
 */
export default combineReducers({
  auth: fromAuth.reducer,
  routing: routerReducer
});


/**
 * selectors
 */