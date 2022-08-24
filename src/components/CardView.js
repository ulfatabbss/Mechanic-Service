import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../content/color';
const BASE_SIZE = { width: 300, height: 190 };
const CardView = () => {
  return (
    <KeyboardAvoidingView>
    <View style={[s.cardContainer]}>
      <View style={{height:190,width:300,backgroundColor:'white',borderRadius:10,overflow:'hidden'}}>
<ImageBackground source={require('../assests/card-front.png')} style={{height:195,width:310}}>
  <Image source={require('../components/icons/stp_card_visa.png')} style={s.icon}/>
  <TextInput placeholder='•••• •••• •••• ••••' style={[s.baseText, s.number,s.placeholder]}/>
  <TextInput placeholder='FULL NAME' style={[s.baseText,s.name]}/>
  <TextInput placeholder='MONTH/YEAR' style={[s.baseText,s.expiryLabel, s.placeholder]}/>
              <TextInput placeholder=' ••/••' style={[s.baseText,s.expiry,s.placeholder]}/>
              <TextInput placeholder='•••' style={[s.baseText, s.amexCVC, s.placeholder]}/>
</ImageBackground>
      </View>
      <TouchableOpacity style={s.button}>
<Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>Paid</Text>
      </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  )
}

export default CardView



const s = StyleSheet.create({
  cardContainer: {alignItems:'center',position:'absolute',width:Dimensions.get('window').width,height:'100%',top:150},
  cardFace: {},
  icon: {
    position: "absolute",
    top: 15,
    right: 15,
    width: 60,
    height: 40,
    resizeMode: "contain",
  },
  baseText: {
    color: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "transparent",
  },
  placeholder: {
    color: "rgba(255, 255, 255, 0.5)",
  },
  focused: {
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
  },
  number: {
    fontSize: 21,
    position: "absolute",
    top: 95,
    left: 28,
  },
  name: {
    fontSize: 16,
    position: "absolute",
    bottom: 20,
    left: 25,
    right: 100,
  },
  expiryLabel: {
    fontSize: 9,
    position: "absolute",
    bottom: 40,
    left: 218,
  },
  expiry: {
    fontSize: 16,
    position: "absolute",
    bottom: 20,
    left: 220,
  },
  amexCVC: {
    fontSize: 16,
    position: "absolute",
    top: 73,
    right: 30,
  },
  cvc: {
    fontSize: 16,
    position: "absolute",
    top: 80,
    right: 30,
  },
  button: {  
  alignSelf:'center',top:100,
  bottom:20,height:60,
  backgroundColor:COLORS.primary,
  width:200,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10}
});