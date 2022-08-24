import {View ,StatusBar,} from 'react-native'
import React,{useEffect,useState} from 'react'
import {WebView} from 'react-native-webview';
import { OrientationLocker, LANDSCAPE } from "react-native-orientation-locker";
const Player = ({navigation,route}) => {

    const {url}=route.params;
  
    // useEffect(() => {
    //    let url =route.params;
    //     setMovie(url);
    //     console.log(url,'video ulr');
        
    //   }, [route]);
   
  return (
    <View style={{flex:1}}>
      <StatusBar
      hidden
			/>
      <OrientationLocker orientation={LANDSCAPE} />
        <WebView
        style={{height:"100%",width:'100%'}}
          source={{uri:url}}
        />
    </View>
  )
}

export default Player