import { StyleSheet, Text, View,Image, Dimensions, SafeAreaView, TouchableOpacity, ScrollView,StatusBar,FlatList,ActivityIndicator } from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import COLORS from '../content/color';
import { AuthContext } from '../navigation/AuthProvider';
import Spinner from 'react-native-loading-spinner-overlay';
import Header from './Header';
const width = Dimensions.get('window').width / 2 - 30;
const Card = ({data,navigation}) => {
    const img=data.images[0].url;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress = {()=> navigation.navigate('Problems',{problems:data.problems})}
        >
        <View style={styles.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            </View>
          </View>

          <View
            style={{
              height: 100,
              width:100,
              alignItems: 'center',
              alignSelf:'center'
            }}>
            <Image source={{
          uri:img
        }}
              style={{ height:100,width:100,borderRadius:10}} resizeMode='contain'/>
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10,alignSelf:'center',color:'#000'}}>
            {data.title} 
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              {/* ${plant.price} */}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
const Vehicales = ({navigation,route}) => {
 const {company_id,category_id} =route.params
    const [isLoading,setloding]=useState(true)
    const {userInfo,searchMechanic} = useContext(AuthContext);
    const [vehicales,setVehicales]=useState('') 
    useEffect(() => {
        setloding(true)
        console.log(company_id,'company_id')
        console.log(category_id,'category_id')
        var axios = require('axios');
    
        var config = {
          method: 'get',
          url: `https://abdulrauf.laraartisan.com/api/vehicles/list?category_id=${category_id}&company_id=${company_id}`,
          headers: { 
            'Accept': 'application/json', 
            'Authorization': `Bearer ${userInfo.access_token}`
          }
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data.data));
          setVehicales(response.data.data)
          setloding(false)
        })
        .catch(function (error) {
          console.log(error);
          setloding(false)
        });
      },[]);
      if (vehicales==0) {
        return (
      
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <StatusBar
        animated={true}
        backgroundColor="#5b18b4"/>
                <Text style={{fontSize:30,color:'red',fontWeight:'bold'}}>Soory data not found.....!</Text>
                <TouchableOpacity style={styles.button}  onPress={() => {navigation.navigate('SearchMechanic',{category_id:category_id})}}>
  <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>
    Request Mechanic
  </Text>
</TouchableOpacity>
           </View>
        );
        }
  return (
    <View style={{flex:1,backgroundColor:COLORS.white,alignItems:'center'}}>
           <Spinner visible={isLoading} />
       <StatusBar
        animated={true}
        backgroundColor="#5b18b4"/>
    <View style={styles.header}>
    <Image source={require('../assests/office-building.png')} style={{height:30,width:30,marginRight:30,backgroundColor:'#fff'}}/>
<Text style={styles.text}>Select Vehicle
</Text>
        
    </View>
    <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 70,
          }}
          numColumns={2}
          data={vehicales}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Card data={item} navigation={navigation} />;
          }}
        />
         <TouchableOpacity style={styles.button}  onPress={() => {navigation.navigate('SearchMechanic',{category_id:category_id})}}>
  <Text style={{fontSize:20,color:'#fff'}}>
    Request Mechanic
  </Text>
</TouchableOpacity>
    </View>
  )
}

export default Vehicales

const styles = StyleSheet.create({
    card: {
        height: 200,
        backgroundColor: COLORS.light,
        width,borderColor:COLORS.primary,borderTopWidth:10,borderWidth:2,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
      },
      header:{
        flexDirection:'row',
        marginBottom:5,
        height:60,paddingHorizontal:30,
        width:'100%',backgroundColor:'#5b18b4',
    justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    text:{
fontSize:30,
fontWeight:'bold',
color:'#fff',textTransform:'uppercase'
    },
    button: {  position: 'absolute', 
     bottom:20,
     height:60,
     backgroundColor:COLORS.primary,
     width:200,justifyContent:'center'
     ,alignItems:'center',
     borderRadius:10}
})