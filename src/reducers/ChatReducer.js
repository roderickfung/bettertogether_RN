import { NEW_LINE, DELETE_CHAT } from '../actions/types';

const INITIAL_STATE = {
  convo: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_LINE:
    return { ...state, convo: action.payload };
  default:
    return state;
  }
}
