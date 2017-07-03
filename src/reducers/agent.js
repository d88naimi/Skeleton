import * as fromAgent from '../actions/agent';

const initialState = {
  ids: [],
  entities: {},
  selected: {
    agentId: null,
    comments: [] 
  }
};

/**
 * Reducer
 */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case fromAgent.LOAD_AGENTS: {
      const agents = action.payload;
      const entities = agents.reduce((acc, agent) => Object.assign(acc, {[agent._id]: agent}), {});
      const ids = Object.keys(entities);
      return Object.assign({}, state, {ids, entities});
    }

    case fromAgent.SELECT_AGENT: {
      const selected = { 
        agentId: action.payload.agentId,
        comments: action.payload.comments
      };
      console.log(selected);
      return Object.assign({}, state, {selected});
    }

    default:
      return state;
  }
}

/**
 * Selectors
 */
export const getAgentList = state => {
  console.log(state.ids.map(id => state.entities[id]));
  return state.ids.map(id => state.entities[id]);
};

export const getSelectedAgent = state => {
  return Object.assign({}, state.entities[state.selected.agentId], {comments: state.selected.comments})
};