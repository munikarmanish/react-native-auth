import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, Spinner } from './components/common';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB7__Wtow8Z50Bh4R3oX9Fa3O-vyQ63e-A',
      authDomain: 'mm-auth.firebaseapp.com',
      databaseURL: 'https://mm-auth.firebaseio.com',
      projectId: 'mm-auth',
      storageBucket: 'mm-auth.appspot.com',
      messagingSenderId: '193210151701',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => { firebase.auth().signOut(); }}>
              Log out
            </Button>
          </View>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
