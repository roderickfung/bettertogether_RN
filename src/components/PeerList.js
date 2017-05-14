import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Header, Container, Content, Body, Footer, FooterTab, List, ListItem, Left, Right, Text, Button } from 'native-base';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { getUsers, logout } from '../actions';


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

  }

  onButtonPress() {
    this.props.logout()
  }

  render() {

    return(
      <Container>
        <Header />
        <Content>
          {
            this.props.users.map( (user) => {
              return(
                <ListItem last key={user.id} >
                  <Left>
                    <Text style={{ fontSize: 12 }}> { user.id }</Text>
                  </Left>
                  <Right>
                    <Button onPress={ this.onSelectPress.bind(this) } style={ styles.btn }>
                      <Text style={styles.btnText} > Talk </Text>
                    </Button>
                  </Right>
                </ListItem>
              )
            })
          }
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={ this.onButtonPress.bind(this) } style={styles.btn}>
              <Text style={ styles.btnText }> Sign Out </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

let styles = {
  btn:{
    backgroundColor: '#D25D62',
    borderRadius: 0
  },
  btnText: {
    color: '#FFF'
  }
}

const mapStateToProps = ( state ) => {
  return{
    users: state.userlist.users,
    id: state.auth.user
  }
}

export default connect(mapStateToProps, { getUsers, logout })(PeerList);
