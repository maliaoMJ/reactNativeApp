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

class MapAndWeatherView extends Component{
  constructor(props){
    super(props)
    this.state={
     uri:this.props.url,
     isLoadError:false
    }
  }
  _showError(){
    this.setState({
      isLoadError:true
    })
  }

  render(){
    return(
      <View style={{flex:1}}>
        {
          this.state.isLoadError?
        <View style={styles.container}>
          <Image style={styles.img} source={require('../img/noConnection.png')}/>
          <Text style={styles.text}>网络连接错误,请检查网络连接</Text>
        </View>
        :
        <WebView
        onError={this._showError.bind(this)}
        source={{uri:this.state.uri}}
        startInLoadingState={true}
        ></WebView>
    }
      </View>
    )
  }
}
const styles = StyleSheet.create({
 container:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
 },
 img:{
   width:300,
   height:300
 },
 text:{
   fontSize:14,
   color:'red',
 }
});
module.exports = MapAndWeatherView;
