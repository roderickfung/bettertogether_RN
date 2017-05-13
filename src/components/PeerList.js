import React, { Component } from 'react';
import { Header, Container, Content, Body, Footer, FooterTab, List, Listitem, Text, Button } from 'native-base';
import { connect } from 'react-redux';

class PeerList extends Component {

  render() {
    return(
      <Container>
        <Header>
          <Text> Hello </Text>
        </Header>
        <Content>
          <Text> Body </Text>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ( state ) => {
  return{
    convo: state.chat.convo,
  }
}

export default connect(mapStateToProps, {})(PeerList);
