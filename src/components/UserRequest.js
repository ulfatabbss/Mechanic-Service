import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import Header from './Header'
const UserRequest = () => {
  return (
    <View style={{flex:1}}>
         <StatusBar
        animated={true}
        backgroundColor="#5b18b4"/>
      <Header/>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'red',fontSize:30,fontWeight:'bold'}}>No Request found.....!</Text>
      </View>
    </View>
  )
}

export default UserRequest

const styles = StyleSheet.create({})