import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Tool from './../tool';
import ReadWebView from './../MapAndWeatherView';

class list extends Component{
  constructor(props){
    super(props);
    this.state={
      type:this.props.type,
      data:null

    }
  }
  render(){
    var data = this.state.data;

    return(
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={
            data
          }
         renderItem={({item}) =>
         {
             return(
           <TouchableWithoutFeedback onPress={this._showDetail.bind(this,item.url,item.title)}>
               <View style={styles.item} >
                 <View style={styles.img}><Image style={styles.imgItem} source={{url:item.img}}></Image></View>
                 <View style={styles.text}>
                   <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                   <Text style={styles.time} numberOfLines={1}>{item.time}</Text>
                 </View>
             </View>
         </TouchableWithoutFeedback>
           );
         }
       }
        />

      </View>
    );
  }
  componentDidMount(){
  // <View><List></List></View>

  this._getReadData();

  }
  _getReadData(callback){
    var self = this;
    Tool.get('http://123.57.39.116:3000/data/read?type='+this.state.type,function(data){
      if(data.status){
        let obj = data.data;
        self.setState({
          data:obj
        });
      }else{
        alert("1.服务器异常，正在抢修中。。。。");
      }
    },function(error){
      alert("服务器异常，正在抢修中。。。。"+error);
    })
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
}
const styles = StyleSheet.create({
container:{
  marginTop:15,
  width:Tool.size.width-20,
  height:Tool.size.height-50,
  // backgroundColor:'yellow'
},
list:{
  height:Tool.size.width-20,
  width:Tool.size.height-50,
  // backgroundColor:'orange',
  marginLeft:10,
  marginRight:10,
},
item:{
  width:Tool.size.width-20,
  height:60,
  // backgroundColor:'green',
  borderBottomWidth:Tool.pixel,
  borderBottomColor:'#eee',

  flex:1,
  flexDirection:'row',

},
text:{
flex:6,
paddingLeft:10,
marginTop:5,

},
img:{
  flex:1
},
imgItem:{
  width:'100%',
  height:50,
  marginTop:5,
  borderRadius:2
},
title:{
  fontSize:14,
  color:'black',
  paddingBottom:8,
},
time:{
  fontSize:12,
  color:'gray',
}
});
module.exports = list;
