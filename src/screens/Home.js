import {Alert,StyleSheet, Text, View,Image, Dimensions, SafeAreaView, TouchableOpacity, ScrollView,StatusBar,FlatList } from 'react-native'
import React,{useContext,useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import COLORS from '../content/color'
import { OrientationLocker, PORTRAIT } from "react-native-orientation-locker";
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../navigation/AuthProvider';
const width = Dimensions.get('window').width / 2 - 30;
const Home = ({navigation}) => {
  const [isLoading,setloding]=useState(true)
  const {userInfo} = useContext(AuthContext);
  const [categories,setCategories]=useState('') 
  useEffect(() => {
    setloding(true)
    console.log(userInfo)
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://abdulrauf.laraartisan.com/api/categories/list/',
      headers: { 
        'Accept': 'application/json', 
        'Authorization': `Bearer ${userInfo.access_token}`
      }
    };
    
    axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data.data));
      setCategories(response.data.data)
      setloding(false)
    })
    .catch(function (error) {
      console.log(error);
      setloding(false)
    });
  },[userInfo]);

  
  const Card = ({data}) => {
    const img=data.images[0].url;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress = {()=> navigation.navigate('Companies',{category_id:data.id})}        >
        <View style={styles.card}>
            <Image source={{ uri:img }}
              style={{ height:120,width:120,alignSelf:'center'}} resizeMode='contain'
            />
          <Text style={{fontWeight: 'bold', fontSize: 20,alignSelf:'center',color:'black'}}>
            {data.title} 
          </Text>
         
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex:1,alignItems:'center',backgroundColor:COLORS.white}}>
                  <Spinner visible={isLoading} />
       <StatusBar
        animated={true}
        backgroundColor="#5b18b4"/>
        <OrientationLocker orientation={PORTRAIT} />
      <Header/>
      <View style={{marginVertical:10,height:150,width:Dimensions.get('window').width-20,borderRadius:10,backgroundColor:COLORS.light,borderColor:COLORS.primary,borderWidth:2,alignItems:'center',elevation:10}}>
      <Image style={{height:'100%',width:'100%',borderRadius:20}} resizeMode='contain' source={require('../assests/bann.jpg')}/>
      </View>
      <Text style={{color:'#000',fontWeight:'700',fontSize:30,lineHeight:30,fontFamily:'Poppins',marginTop:30}}>Dashboard</Text>  
      <Text style={{color:'#000',fontWeight:'700',fontSize:20,lineHeight:20,fontFamily:'Poppins',margin:10,textTransform:'capitalize'}}>Choose the servise you require</Text>  
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 20,
        }}
        numColumns={2}
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Card data={item} />;
        }}
      />
    </SafeAreaView>

  )
}

export default Home

const styles = StyleSheet.create({
  card: {
    height: 200,alignSelf:'center',justifyContent:'center',
    backgroundColor: COLORS.light,
    width,borderTopWidth:10,borderBottomWidth:2,borderLeftWidth:2,borderRightWidth:2,borderColor:COLORS.primary,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },

})