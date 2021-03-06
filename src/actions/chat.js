import {push} from 'react-router-redux';
import axios from "axios";
import {startLoading} from "./loading"; // eslint-disable-next-line
/**
 * Action types
 */
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const LOAD_MESSAGE = 'LOAD_MESSAGE';
export const CHECKED_NEW_MESSAGES = 'CHECKED_NEW_MESSAGES';
export const LOAD_ROOMS = 'LOAD_ROOMS';
export const LOAD_ROOM = 'LOAD_ROOM';
export const SELECT_ROOM = 'SELECT_ROOM';
export const UNSELECT_ROOM = 'UNSELECT_ROOM';


/**
 * helper functions
 */

export function fetchRooms(jwt) {
  const headers = { authorization: `Bearer ${jwt}`};
  return axios.get('/api/chatrooms', { headers });
}

export function fetchMessages(roomId, jwt) {
  const headers = { authorization: `Bearer ${jwt}`};
  return axios.get('/api/messages/' + roomId,  { headers });
}

export function postMessage(message, roomId, jwt) {
  const headers = { authorization: `Bearer ${jwt}`};
  return axios.post(`/api/messages/${roomId}`, message,  { headers })
}


/**
 * Actions
 */

export function getRooms () {
  return function(dispatch, getState) {
    dispatch(startLoading());
    const { auth } = getState();
    fetchRooms(auth.jwt)
      .then(res => dispatch(loadRooms(res.data, auth.user._id)))
  }
}

export function loadRooms (rooms, userId) {
  return {
    type: LOAD_ROOMS,
    payload: {
      rooms,
      userId
    }
  }
}

export function loadRoom (room, userId) {
  return {
    type: LOAD_ROOM,
    payload: {
      room,
      userId
    }
  }
}

export function enterRoom (roomId) {
  return function(dispatch, getState) {
    dispatch(startLoading());
    const { auth } = getState();
    fetchMessages(roomId, auth.jwt)
      .then(res => dispatch(loadMessages(res.data, roomId)))
      .then(() => dispatch(push(`/messages/${roomId}`)))
  }
}

export function getMessages (roomId) {
  return function(dispatch, getState) {
    dispatch(startLoading());
    const { auth } = getState();
    fetchMessages(roomId, auth.jwt)
      .then(res => dispatch(loadMessages(res.data, roomId)))
  }
}

export function loadMessages (messages, roomId) {
  return {
    type: LOAD_MESSAGES,
    payload: {
      messages,
      roomId
    }
  }
}

export function loadMessage (message) {
  return {
    type: LOAD_MESSAGE,
    payload: message
  }
}

export function selectRoom (room) {
  return {
    type: SELECT_ROOM,
    payload: room
  }

}

export function createRoom (opponentId) {
  return function (dispatch, getState) {
    const {auth} = getState();
    const headers = { authorization: `Bearer ${auth.jwt}`};
    dispatch(startLoading());
    axios.post('/api/chatrooms', {user2: opponentId}, {headers})
      .then(res => {
        dispatch(loadRoom(res.data));
        dispatch(selectRoom(res.data));
        dispatch(push(`/messages/${res.data._id}`));

      });
  }
}

export function openChatRoom (opponentId) {
  return function(dispatch, getState) {
    const {chat} = getState();
    if(chat.withs[opponentId]) {
      dispatch(enterRoom(chat.withs[opponentId]));
    } else {
      dispatch(createRoom(opponentId));
    }
  };
}


export function sendMessage ({message, roomId}) {
  return function (dispatch, getState) {
    const {auth} = getState();
    dispatch(startLoading());
    postMessage(message, roomId, auth.jwt)
      .then(res => dispatch(loadMessage(res.data)));
  }
}


export function receiveMessage (message) {
  return function (dispatch) {
    dispatch(loadMessage(message, false));
  }
}

export function  moveToMessageRoute(opponentId) {
  return function (dispatch) {
    dispatch(openChatRoom(opponentId));
  }
}

export function unselectChatroom () {
  return {
    type: UNSELECT_ROOM,
    payload: null
  }
}