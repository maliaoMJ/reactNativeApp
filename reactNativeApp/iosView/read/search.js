import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  TextInput,
} from 'react-native';
import Tool from './../tool';
import List from './list';

class search extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput
          placeholder="Search..."
          style={styles.search}
          placeholderTextColor='#ddd'
          autoFocus={false}
          onChangeText={this._onChangeText}
          selectionColor='blue'
          clearButtonMode='while-editing'
          returnKeyType="search"
          enablesReturnKeyAutomatically={true}
          multiline={false}
          onSubmitEditing={this._onSubmitEditing.bind(this)}

          />
      </View>
    )
  }
  _onChangeText(){
    //当输入文本改变是调入此函数
  }
  _onSubmitEditing(){
  this.props.navigator.push({
    component: List,
    barTintColor: '#fff',
    title: '互联网资讯',
    passProps:{
      type: 'it'
    }
  });

  }
}
const styles = StyleSheet.create({
   container:{
    //  backgroundColor:'red',
     height:65
   },
   search:{
    //  borderWidth:1,
     borderWidth:Tool.pixel,
     height:30,
     color:'black',
     marginLeft:10,
     marginRight:10,
     marginTop:30,
     paddingLeft:5,
     borderRadius:3,
     borderColor:'gray',
     fontSize:12
   }
});
module.exports = search;
