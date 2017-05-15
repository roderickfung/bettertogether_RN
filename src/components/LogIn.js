import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { Container, Content, Header, Form, Left, Input, Footer, FooterTab, Item, Button, Spinner, Text } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, showError } from '../actions';
import styles from '../assets/StyleGuide.js'

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
      <Button block onPress={ this.onButtonPress.bind(this) } style={ styles.btn }>
        <Text style={ styles.btnText }>Login</Text>
      </Button>
    );
  }

  render() {

    return(
      <Container style={ styles.container }>
        <View style={ styles.logoContainer }>
          <Image source={require('../assets/logo.jpg')} style={styles.logo} />
          <Text style={{ fontSize: 12}}>Better Together</Text>
        </View>
        <Form style= { styles.form }>
          <Item regular style={ styles.item }>
            <Input
              style={ styles.input }
              autoCapitalize={'none'}
              value={ this.props.email }
              label='Email'
              placeholder='email'
              onChangeText={ this.onEmailChange.bind(this) }
            >
            </Input>
          </Item>
          <Item regular style={ styles.item }>
            <Input
              style={ styles.input }
              value={ this.props.password }
              password
              label='Password'
              placeholder='password'
              onChangeText={ this.onPasswordChange.bind(this) }
            />
          </Item>
        </Form>
        <Text style={ styles.errorText }>{this.props.error}</Text>
        {
          this.renderButton()
        }
      </Container>
    );
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
