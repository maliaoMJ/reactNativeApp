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
class Hr extends Component{
  render(){
    return(
      <View style={styles.hr}></View>
    )
  }
}
class category extends Component{
  constructor(props){
    super(props);
    this.state={
      data:this.props.data,

    }
  }

  render(){
    let category = [];
    data = this.state.data;
    for(var i in data){
      var item = (
    <TouchableWithoutFeedback key={i} onPress ={this._showList.bind(this,data[i].text)}>
        <View style={styles.categoryItem}>
          <Text>{this.state.data[i].text}</Text>
        </View>
    </TouchableWithoutFeedback>
      );
      category.push(item);
    }
    return(
      <View style={styles.container}>
        <Hr></Hr>
        <View style={styles.container}><Text style={styles.title}>分类</Text></View>
        <View style={styles.categoryBox}>
          {category}
        </View>
    </View>
    )
  }
  _showList(keywords){
    var type = 'it';
    switch (keywords){
      case '互联网':
        type = 'it';
        break;
      case '散文':
        type = 'sanwen';
        break;
      case '笑话':
        type = 'cookies';
        break;
      case '管理':
        type = 'manager';
        break;
      default :
        type = 'it';
        break;
    }
    this.props.navigator.push({
      component: List,
      barTintColor: '#fff',
      title: keywords,
      passProps:{
        type: type
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
  title:{
    flex:1,
    fontSize:16,
    paddingBottom:10,
    marginLeft:10
  },
  categoryBox:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    flexWrap:'wrap',
  },
  categoryItem:{
    width:(Tool.size.width-30)/2,
    height:50,
    marginTop:5,
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
    alignItems:'center',
    justifyContent:'center',
    // shadowColor: 'gray',
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.4,
    // shadowRadius: 5,
    borderWidth:1,
    borderColor:'#eee'

  }
});
module.exports = category;
