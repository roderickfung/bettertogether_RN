import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import { Container, Content, Header, Card, CardSection, Form, Left, Input, Footer, FooterTab, Item, Button, Spinner, Text } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, showError } from '../actions';

class LogIn extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    if( email != null && password != null ) {
      this.props.loginUser ({ email, password });
    } else {
      this.props.showError()
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='small'/>;
    }
    return (
      <Button onPress={ this.onButtonPress.bind(this) }>
        <Text>Login</Text>
      </Button>
    );
  }

  render() {
    return(
      <Container>
        <Header>
        </Header>
        <Content>
          <Form>
            <Item fixedLabel last>
              <Input
                autoCapitalize={'none'}
                value={ this.props.email }
                label='Email'
                placeholder='email'
                onChangeText={ this.onEmailChange.bind(this) }
              />
            </Item>
            <Item fixedLabel last>
              <Input
                value={ this.props.password }
                password
                label='Password'
                placeholder='password'
                onChangeText={ this.onPasswordChange.bind(this) }
              />
            </Item>
          </Form>
          <Text style={ styles.errorText }>{this.props.error}</Text>
        </Content>
        <Footer>
          <FooterTab>
            { this.renderButton() }
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

let styles = {
  errorText: {
    color: '#D25D62',
    fontSize: 12,
    alignSelf: 'center'
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  }
}

export default connect(mapStateToProps, { loginUser, emailChanged, passwordChanged, showError })(LogIn);
