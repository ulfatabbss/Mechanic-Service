import { StyleSheet, Text, View,Image, Dimensions, SafeAreaView, TouchableOpacity, ScrollView,StatusBar,FlatList } from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import COLORS from '../content/color';
import { AuthContext } from '../navigation/AuthProvider';
import Spinner from 'react-native-loading-spinner-overlay';

import Header from './Header';
const width = Dimensions.get('window').width / 2 - 30;
const Card = ({data,navigation,category_id}) => {
    const img=data.images[0].url;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress = {()=> navigation.navigate('Vehicales',{company_id:data.id,category_id:category_id})}
        // onPress={() => navigation.navigate('Details', plant)}
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
                // backgroundColor: plant.like
                //   ? 'rgba(245, 42, 42,0.2)'
                //   : 'rgba(0,0,0,0.2) ',
              }}>
              {/* <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              /> */}
            </View>
          </View>

          <View
            style={{
              height: 100,
              width:100,
              alignItems: 'center',
              alignSelf:'center'
            }}>
            <Image
source={{
          uri:img
        }}
              style={{ height:100,width:100,borderRadius:10}} resizeMode='contain'
            />
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
const Companies = ({navigation,route}) => {
  const {category_id} =route.params
    const [isLoading,setloding]=useState(true)
    const {userInfo} = useContext(AuthContext);
    const [companie,setCompanie]=useState('') 
    useEffect(() => {
        setloding(true)

        var axios = require('axios');
console.log(category_id,'category_id')
        var config = {
          method: 'get',
          url: 'https://abdulrauf.laraartisan.com/api/companies/list/',
          headers: { 
            'Accept': 'application/json', 
            'Authorization': `Bearer ${userInfo.access_token}`
          }
        };
        
        axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data.data));
          setCompanie(response.data.data)
          setloding(false)
        })
        .catch(function (error) {
          console.log(error);
          setloding(false)
        });
      },[]);
  return (
    <View style={{flex:1,alignItems:'center',backgroundColor:COLORS.white}}>
           <Spinner visible={isLoading} />
       <StatusBar
        animated={true}
        backgroundColor="#5b18b4"/>
    <View style={styles.header}>
      <Image source={require('../assests/office-building.png')} style={{height:30,width:30,marginRight:30,backgroundColor:'#fff'}}/>
<Text style={styles.text}>Slect Companie</Text>
    </View>
   <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 70,
        }}
        numColumns={2}
        data={companie}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Card data={item} navigation={navigation}  category_id={category_id}/>;
        }}
      />
    </View>
  )
}

export default Companies

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
        width:'100%',backgroundColor:COLORS.primary,
    justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    text:{
fontSize:30,
fontWeight:'bold',
color:'#fff'
    }
})