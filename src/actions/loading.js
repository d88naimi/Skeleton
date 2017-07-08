/**
 * Created by Hyungwu Pae on 6/24/17.
 */

/**
 * Action types
 */
export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';


/**
 * helper functions
 */

/**
 * Actions
 */
export function startLoading () {
  return {
    type: START_LOADING
  }
}
