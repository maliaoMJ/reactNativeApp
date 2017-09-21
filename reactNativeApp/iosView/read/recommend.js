import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  TouchableWithoutFeedback,
} from 'react-native';
import Tool from './../tool';
import ReadWebView from './../MapAndWeatherView';
import List from './list';
class recommend extends Component{
  constructor(props){
    super(props);
    this.state={
      data: this.props.data,
      type: this.props.type
    }
  }
  render(){
    //获取数据
     let data = this.state.data;
     let first = [];
     let second = [];
     for(var i in data){
       var Item =(
         <View style={styles.item} key={i}>
           <TouchableWithoutFeedback onPress={this._showDetail.bind(this,data[i].url,data[i].title)}>
           <Image style={styles.img} source={{url:data[i].img}} resizeMode="cover"></Image>
           </TouchableWithoutFeedback>
           <Text style={styles.text} numberOfLines={2}>{data[i].title}</Text>

         </View>
       );
         if(i < 4){
          first.push(Item);
        }else{
          second.push(Item);
        }
     }

    return(
      <View style={styles.container}>
         <View style={styles.container}><Text style={styles.title}>{this.props.title}</Text></View>
         <View style={styles.ItemBox}>
            {first}
            {second}
         </View>
         <TouchableWithoutFeedback onPress={this._getList.bind(this,this.props.type)}>
         <View style={styles.container}>
           <Text style={styles.watchMore}>查看更多&gt;</Text>
         </View>
         </TouchableWithoutFeedback>
      </View>
    )
  }
  _showDetail(url,title){
    // alert('xxx');
    this.props.navigator.push({
    component: ReadWebView,
    title: title,
    barTintColor: '#fff',
    passProps:{
      url:url,
    }
  });
  }
  _getList(type){
    this.props.navigator.push({
    component: List,
    title: type,
    barTintColor: '#fff',
    passProps:{
      type:type,
    }
  });
  }
}
const styles = StyleSheet.create({
 container:{
   flex:1,

 },
 ItemBox:{
   flex:1,
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   marginLeft:10,
   marginRight:10,
   marginBottom:5,
   flexWrap:'wrap',

 },
 item:{
 width:(Tool.size.width-50)/4,
 height:140,

 marginTop:5,
 borderTopLeftRadius:4,
 borderTopRightRadius:4,
 shadowColor: 'gray',
 shadowOffset: {width: 0, height: 0},
 shadowOpacity: 0.4,
 shadowRadius: 5
 },
 title:{
   fontSize:15,
   marginLeft:10,
   marginBottom:10
 },
 img:{
   width:(Tool.size.width-50)/4,
   height:112,
   borderTopLeftRadius:4,
   borderTopRightRadius:4,
 },
 text:{
   paddingTop:3,
   fontSize:10,

 },
 watchMore:{
   marginTop:10,
   marginLeft:10,
   color:'rgb(211,211,211)',
   fontWeight:'bold',
   fontSize:13,
   paddingBottom:10
 }
});
module.exports = recommend;
