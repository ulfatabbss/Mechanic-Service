import { StyleSheet, Text, View,SafeAreaView,FlatList,StatusBar,Image,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../navigation/AuthProvider';

const DATA = [
  {
    id: 1,
    title: 'Car Machanic',
    name:'Gorg',
    rating:4.2,
    img:{uri:'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600'},
  },
  {
    id:2,
    title: 'Bike machanic',
    name:'Gorg',
    rating:3.2,
    img:{uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'},
  },
  {
    id:3,
    rating:4.2,
    title: 'Bus Machanic',
    name:'Gorg',
    img:{uri:'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600'},
  },
  {
    id:4,
    rating:3.2,
    title: 'Bus Machanic',
    name:'Gorg',
    img:{uri:'https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=600'},
  }, {
    id:5,
    rating:3.2,
    title: 'Bus Machanic',
    name:'Gorg',
    img:{uri:'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600'},
  },
  {
    id:6,
    rating:3.2,
    title: 'Bus Machanic',
    name:'Gorg',
    img:{uri:'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600'},
  },
  {
    id:7,
    rating:3.2,
    title: 'Bus Machanic',
    name:'Gorg',
    img:{uri:'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600'},
  },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <View style={{alignSelf:'center'}}>
    <Image resizeMode='contain' source={item.img} style={{height:100,width:100,borderRadius:20}}/>
    </View>
    <View style={{alignSelf:'center'}}>
<Text style={{fontSize:15,color:'#000'}}>{item.name}</Text>
<Text style={{fontSize:20,color:'#000',fontWeight:'700',marginVertical:5}}>{item.title}</Text>
<Text style={{fontSize:20,color:'#000'}}>$20/day</Text>
<View style={{flexDirection:'row',alignItems:'center',marginVertical:5}}>
  <Image style={{height:20,width:20,marginRight:5}} source={require('../assests/star.png')}/>
<Text style={{fontSize:20,color:'#000'}}>{item.rating}</Text>
</View>

</View>
 <View>
<Image source={require('../assests/favorites.png')} style={{height:40,width:40,marginTop:20}}/>
 </View>
</View>
);
const Machnic = () => {
  const {isLoading, logout} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.header}>
    <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',}}>
      <View style={{height:50,width:50,borderRadius:25,backgroundColor:'#fff',elevation:10,marginHorizontal:5,marginRight:20,justifyContent:'center',alignItems:'center'}}>
        <Image resizeMode='contain' style={{height:50,width:50,borderRadius:25}} source={require('../assests/userproile.png')} />
      </View>
      <View>
      <Text style={{color:'#000',fontSize:25,lineHeight:30,fontWeight:'700',fontFamily:'Poppins'}}>Machanics</Text>

      </View>
    
    </View>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={logout}>
<Image resizeMode='cover' style={{height:25,width:25,tintColor:'gray'}} source={require('../assests/icons/notification.png')}/>
    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={logout}>
<Image resizeMode='cover' style={{height:25,width:25,tintColor:'gray',marginLeft:10}} source={require('../assests/dots.png')}/>
    </TouchableOpacity>
    </View>
   
</View>

    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
  )
}

export default Machnic

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    marginBottom:60
  }, header:{
    flexDirection:'row',
    marginBottom:5,
    height:60,
    width:'90%',
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'center'
},
elevation: {
  shadowColor: 'gray',
  elevation: 20,
},
  item: {
    backgroundColor: '#fff',
    elevation:10,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height:150,
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'space-between',
   
  },
  title: {
    fontSize: 20,
  },
})