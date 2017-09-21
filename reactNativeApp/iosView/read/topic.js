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
import List from './list';
import ReadWebView from './../MapAndWeatherView'
class Hr extends Component{
  render(){
    return(
      <View style={styles.hr}></View>
    )
  }
}
class topic extends Component{
  constructor(props){
    super(props);
    this.state={
    data:this.props.data,
    }
  }
  render(){
    let first =[];
    let data = this.state.data;
    for(var i in data){
      var Item =(
        <View style={styles.imgBox} key={i}>
          <TouchableWithoutFeedback onPress={this._getDetail.bind(this,data[i].url,data[i].title)}>
             <Image style={styles.img}  source={{uri:data[i].img}}></Image>
          </TouchableWithoutFeedback>
        </View>
      );
      first.push(Item);
    }
    return(
      <View style={styles.container}>
          <Hr></Hr>
          <View style={styles.topic}>
             <View style={styles.container}><Text style={styles.title}>推荐专题</Text></View>
             <View style={styles.Imgcontainer} >
            {first}
             </View>
             <View style={styles.container} >
               <TouchableWithoutFeedback onPress={this._getList.bind(this,this.props.type)}>
               <View style={styles.container}><Text style={styles.pervTitle}>查看同期专题 &gt;</Text></View>
               </TouchableWithoutFeedback>
             </View>
          </View>
          <Hr></Hr>
      </View>
    );

  }
  _getDetail(url,title){
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
hr:{
  marginLeft:10,
  marginRight:10,
  borderWidth:Tool.pixel,
  borderColor:'rgb(236,236,236)',
  marginBottom:10,
},
topic:{
  flex:1,
  marginLeft:10,
  marginRight:10,

},
title:{
  flex:1,
  fontSize:15,
  paddingBottom:10,
},
Imgcontainer:{
  flex:1,
  flexDirection:'row'
},
imgBox:{
  flex:1,
  alignItems:'center',
},
img:{
  flex:1,
  width:Tool.size.width*0.45,
  height:80,
  borderRadius:5,
},
pervTitle:{
  marginTop:10,
  color:'rgb(211,211,211)',
  fontWeight:'bold',
  fontSize:13,
  // textDecorationLine:'underline',
  paddingBottom:10

}



});

module.exports = topic;
