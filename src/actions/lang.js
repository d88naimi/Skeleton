/**
 * Created by Hyungwu Pae on 6/24/17.
 */
import axios from "axios"; // eslint-disable-next-line

/**
 * Action types
 */
export const LOAD_LANGUAGE = 'LOAD_LANGUAGE';


/**
 * helper functions
 */

/**
 * Actions
 */
export function loadLanguage (langCode) {
  return {
    type: LOAD_LANGUAGE,
    payload: langCode
  }
}
