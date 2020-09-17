import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import Address from './Address';
import Cart from './Cart';
import Food from './Food';
import Profile from './Profile';

var {width, height} = Dimensions.get('window');
console.disableYellowBox = true;

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      module: 1,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.module == 1 ? (
          <Food />
        ) : this.state.module == 2 ? (
          <Cart />
        ) : this.state.module == 3 ? (
          <Address />
        ) : (
          <Profile />
        )}
        <View style={styles.bottomTab}>
          <View style={styles.itemTab}>
            <Text>Food</Text>
          </View>
          <View style={styles.itemTab}>
            <Text>Cart</Text>
          </View>
          <View style={styles.itemTab}>
            <Text>Address</Text>
          </View>
          <View style={styles.itemTab}>
            <Text>Profile</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bottomTab: {
    width: width,
    backgroundColor: 'gray',
    flexDirection: 'row',
    height: 60,
  },
  itemTab: {
    width: width / 4,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
