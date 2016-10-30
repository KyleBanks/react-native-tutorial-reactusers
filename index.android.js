import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  Modal
} from 'react-native';

import Header from './src/header'
import UserListView from './src/userlistview';
import UserDetailsView from './src/userdetailsview';

export default class ReactUsers extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      userDetailsVisible: false
    }
  }

  render() {
    var self = this;

    return (
        <View>
          <Header />

          <UserListView onUserSelected={this._onUserSelected.bind(this)}/>

          <Modal animationType={"slide"}
                  visible={this.state.userDetailsVisible} 
                  onRequestClose={this._onCloseUserDetails.bind(this)}>
              <UserDetailsView user={this.state.user} 
                               onClose={this._onCloseUserDetails.bind(this)} />
          </Modal>
        </View>
    )
  }

  _onUserSelected(user) {
    this.setState({
      userDetailsVisible: true,
      user: user
    })
  }

  _onCloseUserDetails() {
    this.setState({
      userDetailsVisible: false,
      user: null
    })
  }
}

AppRegistry.registerComponent('ReactUsers', () => ReactUsers);
