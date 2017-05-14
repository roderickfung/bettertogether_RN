import {
  GET_USERS,
} from '../actions/types';

const INITIAL_STATE = {
  users: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_USERS:
    console.log(action.payload)
    return { ...state, users: action.payload }
  default:
    return state;
  }
}
