import React, { Component } from 'react';
import { AppState, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';
import reducers from './reducers';


const store = createStore(
  reducers, {},
  compose(
    applyMiddleware(ReduxThunk),
    autoRehydrate()
  )
);

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

    firebase.database.enableLogging(true);
    firebase.initializeApp(config);
  }

  render() {

    return(
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

export default App ;
