import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,FlatList} from 'react-native'
import React,{useContext,useEffect, useState} from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import Spinner from 'react-native-loading-spinner-overlay';
import COLORS from '../content/color';
import { ScrollView } from 'react-native-virtualized-view';

const SearchMechanic = ({route,navigation}) => {
    const {userInfo,Clocation} = useContext(AuthContext);
    const [isLoading,setloding]=useState(true);
     const [rating,setRating]=useState('')
    const [data,setData]=useState('');
    const lat=Clocation.latitude;
    const long=Clocation.longitude;
    // const {category_id} =route.params
    const search=()=>{
        setloding(true)
         var axios = require('axios');
        var config = {
          method: 'get',
          url: `https://abdulrauf.laraartisan.com/api/mechanic/list?latitude=${lat}&longitude=${long}`,
          headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${userInfo.access_token}`
          },
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setData(response.data.data);
          setloding(false)
        
         
        })
        .catch(function (error) {
          console.log(error);
          setloding(false)
          
        });
    }
  
const fun=({props})=>{
  switch (de) {
    case 1:
      setRating('★')
      break
    case 2:
     setRating('★ ★')
      break
    case 3:
      setRating('★ ★ ★')
      break
    case 4:
      setRating('★ ★ ★ ★')
      break
    default:
      setRating('★ ★ ★ ★ ★')
  }
}

    useEffect(() => { 
      // fun();
     search();
      }, []);
      const renderItem = ({ item }) => (
        <View style={styles.item}>
          <View style={{alignSelf:'center'}}>
          <Image resizeMode='contain'
      source={require('../assests/userproile.png')}
           style={{height:60,width:60}}/>
          </View>
          <View style={{alignSelf:'center'}}>
      <Text style={{fontSize:30,color:'#000',textTransform:'capitalize'}}>{item.name}</Text>
      <Text style={{fontSize:20,color:'#000',fontWeight:'700',marginVertical:5}}>Charge: {item.price}</Text>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:20,color:'#000'}}>Rating: {item.rating}</Text>
      <Text style={{fontSize:30,color:'yellow'}}> ★</Text>

      </View>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:5}}>
        <Text style={{fontSize:20,color:'yellow'}}>{rating}</Text>
      </View>
      </View>
       <TouchableOpacity
       style={{alignSelf:'center',height:40,width:60,backgroundColor:'#5b18b4',alignItems:'center',justifyContent:'center',borderRadius:10}}
       onPress={()=>{navigation.navigate('SubmitRequest',{
        mechanic_id:item.id,
        lat:lat,
        long:long,
        price:item.price,
        })}}>
      <Text style={{fontSize:14,color:'white'}}>Contact</Text>
       </TouchableOpacity>
      </View>
      );
  return (
       
        <ScrollView style={styles.container}>
             <Spinner visible={isLoading} />
          <View style={styles.header}>
    <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',}}>
      <View style={{height:50,width:50,borderRadius:25,backgroundColor:'#fff',elevation:10,marginHorizontal:5,marginRight:20,justifyContent:'center',alignItems:'center'}}>
        <Image resizeMode='contain' style={{height:50,width:50,borderRadius:25}} source={require('../assests/mechanic.png')} />
      </View>
      <View>
      <Text style={{color:'#FFF',fontSize:30,lineHeight:30,fontWeight:'700',fontFamily:'Poppins'}}>Machanics</Text>

      </View>
    
    </View>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
<Image resizeMode='cover' style={{height:25,width:25}} source={require('../assests/power-off.png')}/>
    </TouchableOpacity>
    </View>
   
</View>
    <FlatList
      data={data}
      renderItem={renderItem}
    />
  </ScrollView>
  )
}

export default SearchMechanic

const styles = StyleSheet.create({
    container: {
        flex: 1
      }, header:{
        flexDirection:'row',
        height:60,paddingBottom:10,
        width:'100%',paddingHorizontal:30,backgroundColor:COLORS.primary,
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center'
    },
      item: {
        backgroundColor: '#fff',
        elevation:10,
        paddingHorizontal: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height:150,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',borderColor:COLORS.primary,borderWidth:2
       
      },
      title: {
        fontSize: 20,
      },
})