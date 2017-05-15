import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import PeerList from './components/PeerList';
import PeerChat from './components/PeerChat';
import LogIn from './components/LogIn';
import styles from './assets/StyleGuide';

const RouterComponent = ( ) => {

  return(
    <Router>
      <Scene key='root' initial={true} type={ ActionConst.REPLACE } >
        <Scene key='auth'
          hideNavBar={true}
          title='Sign In'
          component={ LogIn }
          />
      </Scene>
      <Scene key='afterAuth'>
        <Scene key='pl'
          title='Peers Available'
          component={ PeerList }
          navigationBarStyle={ styles.navbar }
          titleStyle={ styles.title }
          />
        <Scene key='sp'
          title='Chat'
          component={ PeerChat }
          navigationBarStyle={ styles.navbar }
          titleStyle={styles.title}
          barButtonTextStyle:{ color:'#FFFFFF'},

        />
      </Scene>
    </Router>
  );
}

export default RouterComponent;
