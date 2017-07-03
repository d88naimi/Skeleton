import * as fromMessages from '../actions/message';

const initialState = {};

/**
 * Reducer
 */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case fromMessages.LOAD_MESSAGES: {
      const userId = action.payload.userId;
      const messages = action.payload.messages; // array of messages({to: , from: , text: , createdAt: , updatedAt: })
      return messages.reduce((acc, msg) => {
        const opponent = msg.to._id === userId ? msg.from._id : msg.to._id;
        if(!acc[opponent]) acc[opponent] = [];
        acc[opponent].push(msg);
        return acc;
      }, {});

    }

    case fromMessages.LOAD_MESSAGE: {
      const message = action.payload.message;
      const opponent = actions.payload.isYours ? message.to._id : message.from._id;
      if(!state[opponent]) return Object.assign({}, state, {[opponent]: [message]});
      else return Object.assign({}, state, {[opponent]: [...state[opponent], message]});
    }

    default:
      return state;
  }
}

/**
 * Selectors
 */
