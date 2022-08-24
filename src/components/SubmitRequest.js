import { StyleSheet, Text, View,TouchableOpacity,Image, TextInput, SafeAreaView, KeyboardAvoidingView, Dimensions } from 'react-native'
import React, { useState,useEffect,useContext} from 'react'
import { AuthContext } from '../navigation/AuthProvider';
import Spinner from 'react-native-loading-spinner-overlay';
import COLORS from '../content/color';


const SubmitRequest = ({route,navigation}) => {
  const {userInfo} = useContext(AuthContext);
  const [isLoading,setloding]=useState(false)
    const {mechanic_id} =route.params
    const [title, setTittle] = useState('');
    const [description, setDescription] = useState('');
  const handleStore=()=>{
    console.log(userInfo.user.id);
    console.log(title);
    console.log(description);
    console.log(mechanic_id);
    setloding(true)
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('title', 'bike problem');
    data.append('description', 'bike not start');
    data.append('category_id', '1');
    data.append('mechanic_id', '20');
    data.append('customer_id', '12');
    
    var config = {
      method: 'post',
      url: 'https://abdulrauf.laraartisan.com/api/repairingRequest/save',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FiZHVscmF1Zi5sYXJhYXJ0aXNhbi5jb20vYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NjEzNjM1NDAsImV4cCI6MTY2MTM2NzE0MCwibmJmIjoxNjYxMzYzNTQwLCJqdGkiOiJlRjM0bTU4N0RLYjU3SkpqIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJodHRwczovL2FiZHVscmF1Zi5sYXJhYXJ0aXNhbi5jb20vZ3Vlc3QiOiIwIiwic2NvcGUiOiJndWVzdCJ9.gUkdTyJsk8QIwo3kwrtx9Y622aQ4V_R5N-a7u-pduX4', 
        ...data
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
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