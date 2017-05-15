import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Header, Container, Content, Body, Footer, FooterTab, List, ListItem, Left, Right, Text, Button } from 'native-base';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { getUsers, logout } from '../actions';
import cstyle from '../assets/StyleGuide';
import { Actions } from 'react-native-router-flux';

let counter = 0;

class PeerList extends Component {

  componentWillMount() {
    var self = this;
    let fbData = firebase.database().ref('users');
    var userlist = [];
    fbData.once('value', (snapshot) => {
      snapshot.forEach( function(data){
        let result = data.val();
        result['key'] = data.key;
        userlist.push(result);
      })
    }).then(function(){
      self.props.getUsers( userlist );
    })
  }

  onSelectPress() {
    Actions.sp()
  }

  onButtonPress() {
    this.props.logout()
  }

  render() {

    return(
      <Container style={ cstyle.container }>
        <Header />
        <Content style={ cstyle.content}>
          {
            this.props.users.map( (user) => {
              return(
                <ListItem last key={ user.id } onPress={ this.onSelectPress.bind(this) } >
                  <Text style={{ fontSize: 12 }}> { user.email }</Text>
                </ListItem>
              )
            })
          }
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={ this.onButtonPress.bind(this) } style={cstyle.lstbtn}>
              <Text style={ cstyle.btnText }> Sign Out </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = ( state ) => {
  return{
    users: state.userlist.users,
    id: state.auth.user
  }
}

export default connect(mapStateToProps, { getUsers, logout })(PeerList);
