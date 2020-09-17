import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile</Text>
      </View>
    );
  }
}
