import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as fromAuth from './auth';
import * as fromLang from './lang';
import * as fromAgent from './agent';
import { createSelector } from 'reselect'
import getAgentList from './agent'
/**
 * root reduces
 */
export default combineReducers({
  auth: fromAuth.reducer,
  routing: routerReducer,
  lang: fromLang.reducer,
  agents: fromAgent.reducer
});


/**
 * selectors
 */
const getAgentState = state => state.agents;
const getAgentList = createSelector(getAgentState, getAgentList);
