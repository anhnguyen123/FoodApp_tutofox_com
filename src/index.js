import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {Component} from 'react';

import Swiper from 'react-native-swiper';

var {height, width} = Dimensions.get('window');
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBannder: [],
    };
  }
  componentDidMount() {
    const url = 'http://tutofox.com/foodapp/api.json';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.banner);
        this.setState({
          isLoading: false,
          dataBannder: responseJson.banner,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
          <View style={{width: width, alignItems: 'center'}}>
            <Swiper style={{height: width / 2}} showsButtons={false} autoplay={true} autoplayTimeout={2} >
              {this.state.dataBannder.map((itemmap) => {
                return (
                  <Image
                    key={itemmap}
                    style={styles.imagebanner}
                    source={{uri: itemmap}}
                    resizeMode="contain"
                  />
                );
              })}
            </Swiper>
          </View>
          <Text>APp Delivery </Text>
          <Text>{JSON.stringify(this.state.dataBannder)}</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  imagebanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
