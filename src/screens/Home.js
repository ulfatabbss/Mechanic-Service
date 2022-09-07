import {Alert,StyleSheet, Text, View,Image, Dimensions, SafeAreaView, TouchableOpacity,StatusBar,FlatList } from 'react-native'
import React,{useContext,useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import COLORS from '../content/color'
import { ScrollView } from 'react-native-virtualized-view';
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
      setCategories(response.data.data)
      setloding(false)
    })
    .catch(function (error) {
      console.log(error);
      setloding(false)
    });
  },[]);

  
  const Card = ({data}) => {
    const img=data.images[0].url;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress = {()=> navigation.navigate('Companies',{category_id:data.id})}        >
        <View style={styles.card}>
            <Image source={{ uri:img }}
              style={{ height:100,width:100,alignSelf:'center'}} resizeMode='contain'
            />
          <Text style={{fontWeight: 'bold', fontSize: 20,alignSelf:'center',color:'black'}}>
            {data.title} 
          </Text>
         
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={{flex:1,backgroundColor:COLORS.white}}>
                  <Spinner visible={isLoading} />
       <StatusBar
        animated={true}
        backgroundColor="#5b18b4"/>
        <OrientationLocker orientation={PORTRAIT} />
        <View style={{flex:1,alignItems:'center',marginBottom:60}}>

      
      <Header/>
      <View style={{marginVertical:10,height:150,width:Dimensions.get('window').width-20,borderRadius:10,backgroundColor:COLORS.light,borderColor:COLORS.primary,borderWidth:2,alignItems:'center',elevation:10}}>
      <Image style={{height:'100%',width:'100%',borderRadius:20}} resizeMode='contain' source={require('../assests/bann.jpg')}/>
      </View>
      <Text style={[styles.text,{marginTop:10}]}>Dashboard</Text>  
      <Text style={[styles.text,{margin:10,textTransform:'capitalize'}]}>Choose the servise you require</Text>  
      
      <View style={{}}>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          marginBottom:50,
        }}
        numColumns={2}
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Card data={item} />;
        }}
      />
        </View>
        </View>
    </ScrollView>

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
  text:{
    color:'#000',
    fontWeight:'700',
    fontSize:30,
    fontFamily:'Poppins'
  }

})