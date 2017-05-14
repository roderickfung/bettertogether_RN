import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import PeerList from './components/PeerList';
import PeerChat from './components/PeerChat';
import LogIn from './components/LogIn';

const RouterComponent = ( ) => {

  return(
    <Router>
      <Scene key='root' initial={true} type={ ActionConst.REPLACE } >
        <Scene key='auth'
          title='Sign In'
          component={ LogIn }
          />
      </Scene>
      <Scene key='afterAuth'>
        <Scene key='pl'
          title='Peers Available'
          component={ PeerList }
          />
        <Scene key='sp'
          title='Chat'
          component={ PeerChat }
        />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
