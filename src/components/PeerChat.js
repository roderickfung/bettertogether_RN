import React, { Component } from 'react'
import { Text, Item, ListItem, Container, Content, Body, Left, Right, Footer, FooterTab, Form, Input, Button, View } from 'native-base'
import { connect } from 'react-redux';
import styles from '../assets/StyleGuide';

class PeerChat extends Component {

  constructor(props){
    super(props)
    this.state={
      text: ''
    }
  }

  render() {
    return(
      <Container>
        <Content>
          <ListItem>
            <Text> Hello </Text>
          </ListItem>
        </Content>
        <Footer>
          <FooterTab>
            <Form>
              <Item regular style={ styles.item }>
                <Input
                  label='conversation'
                  placeholder='enter text here...'
                  style={ styles.input }
                  value={ this.props.text }
                  >
                </Input>
              </Item>
            </Form>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

}

const mapStateToProps = (state ) =>{
  return {
    chat: state.chat.convo
  }
}

export default connect( mapStateToProps, {} )(PeerChat);
