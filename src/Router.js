import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import PeerList from './components/PeerList';
import PeerChat from './components/PeerChat';

const RouterComponent = ( ) => {

  return(
    <Router >
      <Scene key='root'>
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
