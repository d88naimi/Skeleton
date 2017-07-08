/**
 * Created by Hyungwu Pae on 6/24/17.
 */
import * as fromLoading from '../actions/loading';
import * as fromAgent from '../actions/agent';
import * as fromAuth from '../actions/auth';
import * as fromChat from '../actions/chat';

const initialState = false;

/**
 * Reducer
 */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case fromLoading.START_LOADING: {
      return true;
    }

    case fromAgent.LOAD_AGENTS:
    case fromAgent.SELECT_AGENT:
    case fromAgent.LOAD_COMMENT:
    case fromAuth.LOAD_USER_INFO:
    case fromAuth.LOAD_USER_PHOTO:
    case fromAuth.ERROR_MSG:
    case fromChat.LOAD_ROOMS:
    case fromChat.LOAD_MESSAGES:
    case fromChat.LOAD_ROOM:
    case fromChat.LOAD_MESSAGE:

      {
      return false;
    }


    default:
      return state;
  }
}
