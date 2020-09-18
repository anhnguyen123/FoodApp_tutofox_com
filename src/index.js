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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './Profile';

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




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
          <TouchableOpacity onPress={() => this.setState({module: 1})}>
            <View style={styles.itemTab}>
              <Ionicons
                name="md-restaurant"
                size={30}
                color={this.state.module == 1 ? '#33c37d' : 'gray'}
              />
              <Text>Food</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({module: 2})}>
            <View style={styles.itemTab}>
              <Ionicons
                name="md-basket"
                size={30}
                color={this.state.module == 2 ? '#33c37d' : 'gray'}
              />
              <Text>Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({module: 3})}>
            <View style={styles.itemTab}>
              <Ionicons
                name="md-map"
                size={30}
                color={this.state.module == 3 ? '#33c37d' : 'gray'}
              />
              <Text>Address</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({module: 4})}>
            <View style={styles.itemTab}>
              <Ionicons
                name="md-person"
                size={30}
                color={this.state.module == 4 ? '#33c37d' : 'gray'}
              />
              <Text>Profile</Text>
            </View>
          </TouchableOpacity>
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
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  itemTab: {
    width: width / 4,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
});
