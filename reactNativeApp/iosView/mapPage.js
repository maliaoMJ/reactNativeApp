import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  WebView,
} from 'react-native';
import MapAndWeatherView from './MapAndWeatherView'
class  mapPage extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <View style={{flex:1}}>
        <MapAndWeatherView url="http://localhost:3000/map"/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text:{
    fontSize:50,
    color:'red',
  }
})
module.exports=mapPage;
