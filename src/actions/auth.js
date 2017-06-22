/**
 * Created by Hyungwu Pae on 6/12/17.
 */
import Cookies from 'universal-cookie';
import axios from "axios"; // eslint-disable-next-line
// (new Cookies).set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTQ4Mzg2MmMyN2U5ODJlMGY4NGMyMTAiLCJyb2xlIjoidXNlciIsImlhdCI6MTQ5NzkwNTI1MSwiZXhwIjoxNDk3OTIzMjUxfQ.rKCh_rgxO22y8HNpvuetwT_ql1MxlbNzm9CmZJKE5bs')
/**
 * Action types
 */
export const LOAD_JWT = 'LOAD_JWT';
export const EMPTY_AUTH = 'EMPTY_AUTH';
export const LOAD_USER_INFO = 'LOAD_USER_INFO';
export const LOGOUT = 'LOGOUT';


/**
 * helper functions
 */
export function deleteJWT() {
  (new Cookies).remove('token', {path: '/'});
  return Promise.resolve();
}

export function fetchUserInfo (jwt) {
  const headers = { authorization: `Bearer ${jwt}`};
  return axios.get('/api/users/me', { headers })
}

export function saveJWT(jwt) {
  (new Cookies).set('token', jwt);
  return Promise.resolve();
}

/**
 * Actions
 */
export function loadJWT (jwt) {
  return {
    type: LOAD_JWT,
    payload: jwt
  }
}

export function signup (secret) { //email, name, password
  return dispatch => {
    axios.post('/api/users', secret)
      .then(
        res => saveJWT(res.data.token),
        err => console.log("something went wrong. Try again")
      )
      .then(() => dispatch(checkLoginStatus()));
  }
}

export function login (secret) { //email, password
  return dispatch => {
    axios.post('/auth/local', secret)
      .then(
        res => saveJWT(res.data.token),
        err => console.log("something went wrong. Try again")
      )
      .then(() => dispatch(checkLoginStatus()));
  }
}


export const fetchJWT = () => {
  return function (dispatch) {// eslint-disable-next-line
    return Promise.resolve((new Cookies).get('token') || null)
      .then(jwt => dispatch(loadJWT(jwt)));
  }
};

export function emptyAuth () {
  return {
    type: EMPTY_AUTH
  }
}

export function loadUserInfo (user) {
  return {
    type: LOAD_USER_INFO,
    payload: user
  };
}

export function checkLoginStatus() {
  return function(dispatch) {
    dispatch(fetchJWT())
      .then(action => {
        dispatch(getUserInfo(action.payload));
      })
  }
}

export function getUserInfo (jwt) {
  return function(dispatch) {
    // if we don't have jwt, it means user is not in logged-in state.
    if(!jwt) return Promise.resolve();
    return fetchUserInfo(jwt)
      .then(
        res => dispatch(loadUserInfo(res.data)),
        err => dispatch(logout(err))
      )
  };
}

export function logout () {
  return function (dispatch) {
    deleteJWT()
      .then(() => dispatch(emptyAuth()));
  }
}
