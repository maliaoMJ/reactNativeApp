import React from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import Swiper from 'react-native-swiper';
import Tool from './../tool';
var styles = {
  wrapper: {
  },
  slide1: {

    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BBD9'
  },
  img:{
    width:'100%',
    height:'100%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  button:{
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dot:{
    bottom:-15,
    left:140,
    backgroundColor:'rgba(0,0,0,0.8)',
  },
  activeDot:{
    bottom:-15,
    left:140,
    backgroundColor:'rgba(255,255,255,0.8)',
  },

}

module.exports=function(){

   return (
     <Swiper style={styles.wrapper}
     showsButtons={false}
     autoplay
     buttonWrapperStyle={styles.button}
     showsPagination={true}
     dotStyle={styles.dot}
     activeDotStyle={styles.activeDot}


     >
      <View style={styles.slide1}>
        <Image style={styles.img} source={{url:'http://c.hiphotos.baidu.com/zhidao/pic/item/908fa0ec08fa513d8ce4dc083f6d55fbb3fbd99e.jpg'}}></Image>
      </View>
      <View style={styles.slide2}>
        <Image style={styles.img} source={{url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505720174216&di=9b7dd8608a9e538a81b76ec36c664064&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2011%2F360%2F6163TLR088W0.jpg'}}></Image>
      </View>
      <View style={styles.slide3}>
        <Image style={styles.img} source={{url:'http://a.ikafan.com/attachment/forum/201308/14/070512faufcoj6okddfcff.jpg'}}></Image>
      </View>
      <View style={styles.slide3}>
        <Image style={styles.img} source={{url:'http://a.ikafan.com/attachment/forum/201308/14/070512faufcoj6okddfcff.jpg'}}></Image>
      </View>
   </Swiper>);
}
