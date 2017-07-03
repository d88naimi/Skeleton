import {push} from 'react-router-redux';
import axios from "axios"; // eslint-disable-next-line
/**
 * Action types
 */
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const LOAD_MESSAGE = 'LOAD_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';


/**
 * helper functions
 */

export function fetchMessages() {
  return axios.get('/api/messages');
}

export function postMessage(message) {
  return axios.post('/api/messages', message)
}


/**
 * Actions
 */
export function getMessages () {
  return function(dispatch, getState) {
    const { auth } = getState();
    fetchMessages()
      .then(res => dispatch(loadMessages(res.data, auth.user._id)))
  }
}

export function loadMessages (messages, userId) {
  return {
    type: LOAD_MESSAGES,
    payload: {
      messages,
      userId
    }
  }
}

export function loadMessage (message, isYours) {
  return {
    type: LOAD_MESSAGE,
    payload: {
      message,
      isYours
    }
  }
}

export function sendMessage (message) {
  return function (dispatch) {
    postMessage(newMessage)
      .then(res => dispatch(loadMessage(newMessage, true)))
  }
}

export function receiveMessage (message) {
  return function (dispatch) {
    dispatch(loadMessage(message, false));
  }
}