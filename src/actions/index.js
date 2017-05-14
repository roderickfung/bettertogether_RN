import firebase from 'firebase';
export * from './messages';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN,
  LOGIN_SUCCESS,
  PUSH_HEX,
  LOGIN_FAIL,
  LOGOUT,
  GET_USERS
 } from './types';
import { Actions } from 'react-native-router-flux';

// =================== AUTH

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN });
    firebase.auth().signInWithEmailAndPassword( email, password )
      .then((user) => {
        loginSuccess(dispatch, user)
      })
      .catch((e) => {
        console.log(e);
        firebase.auth().createUserWithEmailAndPassword( email, password )
          .then( (user) => {
            let id = user.uid
            console.log('CREATE USER SUCCESS');
            console.log(id)
            firebase.database().ref('users/' + id ).set({
              id: id,
              email: email
            })
            pushHex(dispatch, id);
            console.log('AFTER PUSH_HEX: ')
            loginSuccess(dispatch, user);
            console.log('AFTER LOGIN SUCCESS ')
          })
          .catch((e) => {
            loginFail(dispatch, e.message);
            console.log(e);
          })
      });
  };
};

const pushHex = ( dispatch, id ) => {
  console.log('ENTERING PUSH HEX ' + id)
  dispatch({ type: PUSH_HEX, payload: id });
}

const loginSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_SUCCESS, payload: user });
  Actions.afterAuth();
};

const loginFail = (dispatch, error) => {
  dispatch({ type: LOGIN_FAIL, payload: error });
};

export const logout = () => {
  return(dispatch) => {
    dispatch({ type: LOGOUT });
    firebase.auth().signOut().then(function(){
      Actions.root()
    }, function(e){
      console.log(e);
    })
  }
}

export const showError = () => {
  return(dispatch) => {
    dispatch({ type: LOGIN_FAIL, payload: 'email and password cannot be empty' })
  }
}

// =================== USERLIST

export const getUsers = (userlist ) => {
  console.log(userlist);
  return(dispatch) => {
    dispatch({ type: GET_USERS, payload: userlist })
  }
}

// =================== CHAT
