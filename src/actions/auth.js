/**
 * Created by Hyungwu Pae on 6/12/17.
 */
import {push} from 'react-router-redux';
import Cookies from 'universal-cookie';
import axios from "axios"; // eslint-disable-next-line

/**
 * Action types
 */
export const LOAD_JWT = 'LOAD_JWT';
export const EMPTY_AUTH = 'EMPTY_AUTH';
export const LOAD_USER_INFO = 'LOAD_USER_INFO';
export const LOGOUT = 'LOGOUT';
export const LOAD_USER_PHOTO = 'LOAD_USER_PHOTO';


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

export function uploadToS3(file, signedRequest, url) {
  return axios.put(signedRequest, file, {
    headers: {
      'Content-Type': file.type
    }
  }).then(() => {
    return url;
  });
}

export function getSignedRequest(file) {
  const url = '/api/photo/s3-signed-req';
  return axios.get(url, {
    params: {
      'file-name': file.name,
      'file-type': file.type
    }
  })
  .then(res => res.data)
    // return uploadToS3(file, res.signedRequest, res.url);
  .catch(e => alert('Could not upload file.'));
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
      .then(() => {
        dispatch(checkLoginStatus());
        dispatch(push('/dashboard'))
      });
  }
}

export function login (secret) { //email, password
  return dispatch => {
    axios.post('/auth/local', secret)
      .then(
        res => saveJWT(res.data.token),
        err => console.log("something went wrong. Try again")
      )
      .then(() => {
        dispatch(checkLoginStatus());
        dispatch(push('/dashboard'))
      });
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
        res => {
          dispatch(loadUserInfo(res.data));

        },
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

export function loadUserPhoto (url) {
  return {
    type: LOAD_USER_PHOTO,
    payload: url
  }
}

export function changeUserInfo (update) {
  return function (dispatch, getState) {
    const { auth } = getState();
    axios.put(`/api/users/${auth.user._id}`, update)
      .then(res => dispatch(loadUserInfo(res.data)))
  }
}

export function uploadImage (fileUpload) {
  return function (dispatch) {
    let file = fileUpload.files[0];
    // console.log(file);
    getSignedRequest(file)
      .then(res => {
        // console.log(res);
        // file.name = res.filename;
        return uploadToS3(file, res.signedRequest, res.url)
      })
      .then(url => dispatch(changeUserInfo({photoURL: url})))
  }
}

export function selectAsMyAgent (agentId) {
  return function (dispatch) {
    dispatch(changeUserInfo({myAgent: agentId}));
  }
}