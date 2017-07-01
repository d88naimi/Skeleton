import {push} from 'react-router-redux';
import axios from "axios"; // eslint-disable-next-line
/**
 * Action types
 */
export const LOAD_AGENTS = 'LOAD_AGENTS';
export const SELECT_AGENT = 'SELECT_AGENT';
export const FETCH_AGENT = 'FETCH_AGENT';


/**
 * helper functions
 */
export function fetchAgents ({language, location, page}) {
  let params = {};
  if(language) params.language = language;
  if(location) params.location = location;
  if(page) params.page = page;
  return axios.get(`/api/users/agents` , { params });
}

export function fetchAgent(agentId) {
  return axios.get('/api/users/agent/' + agentId);
}


export function fetchComments (agentId) {
  return axios.get(`/api/comments/agent/${agentId}`);
}

/**
 * Actions
 */
export function moveToSearchResult ({language, location, page}) {
  return function (dispatch) {
    let path = '/results?';
    if(language) path += `language=${language}&`;
    if(location) path += `location=${location}&`;
    if(page) path += `page=${page}`;
    dispatch(push(path));
  }
}

export function searchAgents ({language, location, page}) {
  return function (dispatch, getState) {
    fetchAgents({language, location, page})
      .then(res => dispatch(loadAgents(res.data)));
  } 
}

export function loadAgents (agents) {
  return {
    type: LOAD_AGENTS,
    payload: agents
  };
}

export function selectAgent (agentId) {
  return function(dispatch, getState) {
    const { agents } = getState();
    if(agents.entities[agentId]) {
      fetchComments(agentId)
        .then(res => dispatch({
          type: SELECT_AGENT,
          payload: {
            agentId,
            comments: res.data
          }
        }))
      
      
      
    }
    else {
      Promise.all([fetchAgent(agentId), fetchComments(agentId)])
        .then(([res1,res2]) => {
          dispatch(loadAgents([res1.data]));
          dispatch({type: SELECT_AGENT, payload: {
            agentId,
            comments: res2.data
          }});
        });
    }
  }
}