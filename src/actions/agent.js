/**
 * Action types
 */
import {push} from 'react-router-redux';
import axios from "axios";
import {startLoading} from "./loading";
import {loadError} from "./auth";
export const LOAD_AGENTS = 'LOAD_AGENTS';
export const SELECT_AGENT = 'SELECT_AGENT';
export const FETCH_AGENT = 'FETCH_AGENT';
export const LOAD_COMMENT = 'LOAD_COMMENT';


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
export function postComment (agentId, comment, jwt) {
  const headers = { authorization: `Bearer ${jwt}`};
  return axios.post(`/api/comments/${agentId}`, comment, { headers });
}

/**
 * Actions
 */
export function moveToSearchResult ({language, location, page}) {
  return function (dispatch) {
    let path = '/results?';
    if(language && language !== "All") path += `language=${language}&`;
    if(location && location !=='All') path += `location=${location}&`;
    if(page) path += `page=${page}`;
    dispatch(push(path));
  }
}

export function searchAgents ({language, location, page}) {
  return function (dispatch, getState) {
    dispatch(startLoading());
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

export function sendComment ({comment, agentId}) {
  return function (dispatch, getState) {
    const { auth } = getState();
    dispatch(startLoading());
    postComment(agentId, comment, auth.jwt)
      .then(res => dispatch(loadComment({agentId, comment: res.data})))
      .catch(err => {
        if(err.response && err.response.data && err.response.data.message) {
          return dispatch(loadError(err.response.data.message))
        } else dispatch(loadError("Fail to post a comment"));
      })
  }
}

export function loadComment ({comment, agentId}) {
  return {
    type: LOAD_COMMENT,
    payload: {
      comment,
      agentId
    }
  }
}
export function selectAgent (agentId) {
  return function(dispatch, getState) {
    const { agents } = getState();
    if(agents.entities[agentId]) {
      dispatch(startLoading());
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
      dispatch(startLoading());
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

