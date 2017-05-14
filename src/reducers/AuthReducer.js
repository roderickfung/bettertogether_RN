import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN,
  LOGIN_SUCCESS,
  PUSH_HEX,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const INITIAL_STATE = {
  email: null,
  password: null,
  login: false,
  id: null,
  user: null,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_CHANGED:
    return { ...state, email: action.payload };
  case PASSWORD_CHANGED:
    return { ...state, password: action.payload };
  case LOGIN:
    console.log('ENTER LOGIN REDUCER')
    return { ...state, user: action.payload};
  case PUSH_HEX:
    return { ...state, id: action.payload};
  case LOGIN_SUCCESS:
    return { ...state, login: true, error: ''}
  case LOGIN_FAIL:
    return { ...state, error: action.payload }
  case LOGOUT:
    return { ...INITIAL_STATE}
  default:
    return state;
  }
}
