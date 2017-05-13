import React, { Component } from 'react';
import {AppState, AsyncStorage} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyDdw-UuLC-qUDWm0mnsc00JOIv89wIdNUc",
      authDomain: "bettertogether-29d02.firebaseapp.com",
      databaseURL: "https://bettertogether-29d02.firebaseio.com",
      projectId: "bettertogether-29d02",
      storageBucket: "bettertogether-29d02.appspot.com",
      messagingSenderId: "711721693663"
    };

    firebase.initializeApp(config);
  }


  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

export default App ;
