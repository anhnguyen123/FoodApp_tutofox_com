import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

var {width, height} = Dimensions.get('window');
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart: [],
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('cart').then((cart) => {
      if (cart !== null) {
        const cartFood = JSON.parse(cart);
        this.setState({dataCart: cartFood});
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 20}} />
        <Text style={{fontSize: 28, color: 'gray', fontWeight: 'bold'}}>
          Cart food
        </Text>
        <View style={{height: 10}} />
        {/* <Text>{JSON.stringify(this.state.dataCart)}</Text> */}

        <View style={{flex: 1, backgroundColor: 'transparent'}}>
          <ScrollView>
            {this.state.dataCart.map((item) => {
              return (
                <View
                  style={{
                    width: width - 20,
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    borderColor: '#cccccc',
                    paddingBottom: 10,
                  }}>
                  <Image
                    style={{width: width / 3, height: width / 3}}
                    source={{}}
                  />
                  <View
                    style={{
                      backgroundColor: 'transparent',
                      flex: 1,
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        Title
                      </Text>
                      <Text>Lorem ípum food</Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#33c37d',
                          fontSize: 20,
                        }}>
                        $567
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons
                          name="ios-remove-circle"
                          size={30}
                          color="#33c37d"
                        />
                        <Text
                          style={{fontWeight: 'bold', paddingHorizontal: 8}}>
                          5
                        </Text>
                        <Ionicons
                          name="ios-add-circle"
                          size={30}
                          color="#33c37d"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={{height: 20}} />

        <TouchableOpacity
          style={{
            backgroundColor: '#33c37d',
            width: width - 40,
            alignItems: 'center',
            padding: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
            }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
        <View style={{height: 10}} />
      </View>
    );
  }
}
