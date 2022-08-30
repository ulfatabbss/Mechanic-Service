import { StyleSheet, Text, View,TouchableOpacity,Image, TextInput, SafeAreaView, KeyboardAvoidingView, Dimensions, Alert } from 'react-native'
import React, { useState,useEffect,useContext} from 'react'
import { AuthContext } from '../navigation/AuthProvider';
import Spinner from 'react-native-loading-spinner-overlay';
import COLORS from '../content/color';


const SubmitRequest = ({route,navigation}) => {
  const {userInfo} = useContext(AuthContext);
  const [isLoading,setloding]=useState(false)
    const {mechanic_id,lat,long} =route.params
    const [title, setTittle] = useState('');
    const [description, setDescription] = useState('');
  const handleStore=()=>{
    console.log(userInfo.user.id);
    console.log(title);
    console.log(description);
    console.log(mechanic_id);
    setloding(true)
    var axios = require('axios');
var data = JSON.stringify({
  "title": title,
  "description": description,
  "mechanic_id": mechanic_id,
  "customer_id":userInfo.user.id,
  "category_id": "1"
});

var config = {
  method: 'post',
  url: 'https://abdulrauf.laraartisan.com/api/repairingRequest/save',
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
  navigation.navigate("CardView",{}),
  Alert.alert(
    'Request submit successfull...'
 )
})
.catch(function (error) {
  console.log(error);
  setloding(false)
});
}

  return (
        <KeyboardAvoidingView>
          <View style={styles.container}>
        <Spinner visible={isLoading} />
         <View style={styles.header}>
    <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',}}>
      <View style={{height:50,width:50,borderRadius:25,backgroundColor:'#fff',elevation:10,marginHorizontal:5,marginRight:20,justifyContent:'center',alignItems:'center'}}>
        <Image resizeMode='contain' style={{height:50,width:50,borderRadius:25}} source={require('../assests/userproile.png')} />
      </View>
      <Text style={{color:'#fff',fontSize:30,lineHeight:30,fontWeight:'700',fontFamily:'Poppins',textTransform:'capitalize'}}>Request mechanic</Text>
    </View>
</View>
<View style={{backgroundColor:'#fff',elevation:10,margin:20,height:60,justifyContent:'center',borderColor:COLORS.primary,borderWidth:2,borderRadius:10}}>
<TextInput placeholder='Title' placeholderTextColor={'#000'}
 value={title} onChangeText={(text) => setTittle(text)}
style={{paddingHorizontal:10,height:60,borderRadius:5,color:'#000'}}></TextInput>
</View>
<View style={{height:400,backgroundColor:'#fff',margin:20,elevation:10,borderColor:COLORS.primary,borderWidth:2,borderRadius:10}}>
<TextInput placeholder='Description' placeholderTextColor={'#000'}
 value={description} onChangeText={(text) => setDescription(text)}
 style={{paddingHorizontal:10,borderRadius:5,color:'#000'}}></TextInput>
</View><View style={{height:100,width:Dimensions.get('window').width-40,alignSelf:'center'}}>
<Text style={{fontSize:30,color:COLORS.primary,fontWeight:'bold',padding:5,borderRadius:10}}>Your Current Location</Text>
<Text style={{fontSize:20,color:'#000',padding:5}}>Latitude: {lat}</Text>
<Text style={{fontSize:20,color:'#000',padding:5}}>Longitude: {long}</Text>
</View>
<TouchableOpacity style={styles.button}  onPress={() => {handleStore()}}>
<Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Submit Form</Text>
</TouchableOpacity>
</View>
</KeyboardAvoidingView>
  )
}

export default SubmitRequest

const styles = StyleSheet.create({
    container: {
        flex: 1,width:Dimensions.get('window').width,
        marginBottom:60,
         height: '100%',position:"absolute"
      },
    header:{
        flexDirection:'row',
        marginBottom:5,backgroundColor:COLORS.primary,
        height:60,
        width:'100%',paddingHorizontal:20,
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center'
    },
      button: {alignSelf:'center',
        justifyContent:'flex-end',
        top:20,height:60,
        backgroundColor:COLORS.primary,
        width:200,justifyContent:'center'
        ,alignItems:'center',
        borderRadius:10}
})