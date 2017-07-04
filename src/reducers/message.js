import * as fromMessages from '../actions/message';

const initialState = { newMsgCounter: 0, messages: {} };

/**
 * Reducer
 */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case fromMessages.LOAD_MESSAGES: {
      const userId = action.payload.userId;
      const messages = action.payload.messages; // array of messages({to: , from: , text: , createdAt: , updatedAt: })
      return {
        messages: messages.reduce((acc, msg) => {
          const opponent = msg.to._id === userId ? msg.from._id : msg.to._id;
          if(!acc[opponent]) acc[opponent] = [];
          acc[opponent].push(msg);
          return acc;
        }, {}),
        newMsgCounter: state.newMsgCounter
      }

    }

    case fromMessages.LOAD_MESSAGE: {
      const message = action.payload.message;
      const opponent = actions.payload.isYours ? message.to._id : message.from._id;

      let messages;
      if(!state[opponent]) {
        messages = Object.assign({}, state.messages, {[opponent]: [message]});
      }
      else {
        messages = Object.assign({}, state.messages, {[opponent]: [...state.messages[opponent], message]});
      }
      return {
        messages,
        newMsgCounter: state.newMsgCounter + 1
      }
    }

    case fromMessages.CHECKED_NEW_MESSAGES: {
      return {
        newMsgCounter: 0,
        messages: state.messages
      };
    }

    default:
      return state;
  }
}

/**
 * Selectors
 */
