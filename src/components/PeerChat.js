import React, { Component } from 'react'
import { Container, Content, Body, Left, Right, Footer, FooterTab } from 'native-base'
import { connect } from 'react-redux';

class PeerChat extends Component {

  componentWillMount() {

  }
}

const mapStateToProps = (state ) =>{
  return {
    chat: state.chat.convo
  }
}

export default connect( mapStateToProps, {} )(PeerChat);
