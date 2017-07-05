import {push} from 'react-router-redux';
import axios from "axios"; // eslint-disable-next-line
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

export function fetchRooms() {
  return axios.get('/api/chatrooms');
}

export function fetchMessages(roomId) {
  return axios.get('/api/messages/' + roomId);
}

export function postMessage(message, roomId) {
  return axios.post(`/api/messages/${roomId}`, message)
}


/**
 * Actions
 */

export function getRooms () {
  return function(dispatch, getState) {
    const { auth } = getState();
    fetchRooms()
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
    fetchMessages(roomId)
      .then(res => dispatch(loadMessages(res.data, roomId)))
      .then(() => dispatch(push(`/messages/${roomId}`)))
  }
}

export function getMessages (roomId) {
  return function(dispatch) {
    fetchMessages(roomId)
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
  return function (dispatch) {
    axios.post('/api/chatrooms', {user2: opponentId})
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
  return function (dispatch) {
    console.info(message)
    // console.info(roomId)
    postMessage(message, roomId)
      .then(res => dispatch(loadMessage(res.data)));
  }
}


export function receiveMessage (message) {
  return function (dispatch) {
    dispatch(loadMessage(message, false));
  }
}

export function  moveToMessageRoute(opponentId) {
  return function (dispatch, getState) {
    const {auth} = getState();
    dispatch(openChatRoom(opponentId));
  }
}

export function unselectChatroom () {
  return {
    type: UNSELECT_ROOM,
    payload: null
  }
}