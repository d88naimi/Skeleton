/**
 * Created by Hyungwu Pae on 6/24/17.
 */
import * as fromLang from '../actions/lang';
import * as languages from '../config/messages'

const browserLang = window.navigator.userLanguage || (window.navigator.languages && window.navigator.languages[0]) || window.navigator.language;
const userDefaultLang = browserLang.split('-')[0];

const initialState = {
  language: userDefaultLang,
  messages: languages[userDefaultLang]
};

/**
 * Reducer
 */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case fromLang.LOAD_LANGUAGE: {
      const language = action.payload;
      const messages = languages[language];
      return Object.assign({}, state, {language, messages});
    }

    default:
      return state;
  }
}
