import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  WebView,
  ScrollView,
  NavigatorIOS,
} from 'react-native';
import Category from './read/category';
import Search from './read/search';
import List from './read/list';
import Recommend from './read/recommend';
import Topic from './read/topic';
import Swiper from './read/swiper';
import Tool from './tool';

class read extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShow: false,
      recommendTopic: null,
      hotTopic: null,
      category: null,
      other: null,
      refreshing: false
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <Search navigator={this.props.navigator}></Search>

        {
          this.state.isShow?
          <ScrollView style={styles.containers}  >
            <View style={styles.swiper}><Swiper></Swiper></View>
            <Topic data={this.state.recommendTopic}  type="manager" navigator={this.props.navigator}></Topic>
            <Recommend title="热门推荐" data={this.state.hotTopic} navigator={this.props.navigator} type="it"></Recommend>
            <Category data={this.state.category} navigator={this.props.navigator}></Category>
            <Recommend title="清新一刻" data={this.state.other} navigator={this.props.navigator} type="sanwen"></Recommend>
          </ScrollView>
          :
          <View><Text>暂时无结果</Text></View>
        }
      </View>
    )

  }
componentDidMount(){
// <View><List></List></View>

this._getReadData();

}
_getReadData(callback){
  var self = this;
  Tool.get('http://123.57.39.116:3000/data/read?type=config',function(data){
    if(data.status){
      let obj = data.data;
      console.log(obj);
      self.setState({
        isShow: true,
        recommendTopic: obj.recommendTopic,
        hotTopic: obj.hotTopic,
        category: obj.category,
        other: obj.other,
        refreshing: false
      });
    }else{
      alert("1.服务器异常，正在抢修中。。。。");
    }
  },function(error){
    alert("服务器异常，正在抢修中。。。。"+error);
  })
}
}
class readView extends Component{
  render(){
  return(
    <NavigatorIOS
  initialRoute={{
        component:read,
        title: '轻松阅读',
        navigationBarHidden:true
      }}
      style={{flex: 1}}
    />
  );

  }
}
const styles = StyleSheet.create({
container:{
  flex:1,
},
containers:{
  marginBottom:50
},
swiper:{
  flex:1,
  height:150,
  marginLeft:10,
  marginRight:10,
}
});
module.exports = readView;
