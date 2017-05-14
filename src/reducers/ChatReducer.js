import {
  ADD_MESSAGE,
  SEND_MESSAGE,
  FETCH_MESSAGES,
  RECEIVED_MESSAGES,
  DELETE_CHAT
} from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  lastFetched: null,
  height: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case DELETE_CHAT:
    return { ...INITIAL_STATE}
  default:
    return state;
  }
}
