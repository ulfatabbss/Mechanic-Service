import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState,useEffect,useContext} from 'react'
import COLORS from '../content/color';
import { AuthContext } from '../navigation/AuthProvider';

const BASE_SIZE = { width: 300, height: 190 };
import Spinner from 'react-native-loading-spinner-overlay';
const CardView = ({navigation,route}) => {
  const {userInfo} = useContext(AuthContext);
  const {price,rrid} =route.params
  const [isLoading,setloding]=useState(false)
  const amount=price;
  const [cardNubmer, setCardNubmer] = useState('');
  const handPayment=()=>{
    setloding(true)
    var axios = require('axios');
var data = JSON.stringify({
});

var config = {
  method: 'post',
  url: `https://abdulrauf.laraartisan.com/api/payment/pay?rr_id=${rrid}&amount=${price}&card_nubmer=${cardNubmer}`,
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${userInfo.access_token}`
  },
  data : data
};
axios(config)
.then(function (response) {
  setloding(false)
  console.log(JSON.stringify(response.data));
 navigation.replace("Tabs");
})
.catch(function (error) {
  console.log(error);
  setloding(false)
});
}
  return (
    <KeyboardAvoidingView>
              <Spinner visible={isLoading} />
              <Text style={{fontSize:30,color:'#000',alignSelf:'center',marginTop:30}}>Payment Method</Text>
    <View style={[s.cardContainer]}>
      <View style={{height:190,width:300,backgroundColor:'white',borderRadius:10,overflow:'hidden'}}>
<ImageBackground source={require('../assests/card-front.png')} style={{height:195,width:310}}>
  <Image source={require('../components/icons/stp_card_visa.png')} style={s.icon}/>
  <TextInput  value={cardNubmer} onChangeText={(text) => setCardNubmer(text)} maxLength={16}
   placeholder='•••• •••• •••• ••••' style={[s.baseText, s.number,s.placeholder]} keyboardType={'number-pad'}/>
  <TextInput placeholder='FULL NAME' style={[s.baseText,s.name]}/>
  <Text placeholder='AMOUNT' style={[s.baseText,s.expiryLabel, s.placeholder,{fontSize:16}]}>AMOUNT</Text>
              <Text style={[s.baseText,s.expiry,s.placeholder]}>{amount}</Text>
</ImageBackground>
      </View>
      <TouchableOpacity style={s.button} onPress={() => {handPayment()}}>
<Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>Confirm</Text>
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
    color: "rgba(255, 255, 255, 0.9)",
    backgroundColor: "transparent",
  },
  placeholder: {
    color: "rgba(255, 255, 255, 0.9)",
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