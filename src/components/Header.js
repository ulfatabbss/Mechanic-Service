import { StyleSheet, Text, View,Image,TouchableOpacity,StatusBar } from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '../navigation/AuthProvider';
import COLORS from '../content/color';
const Header = () => {
  const {logout,userInfo} = useContext(AuthContext);
  const [isLoading,setloding]=useState(true)
  const [count,setCount]=useState(true)
  return (
    <View style={styles.header}>
      <View style={{marginHorizontal:5,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <Image resizeMode='contain' style={{height:50,width:50,borderRadius:25,tintColor:'white',marginRight:15,}} source={require('../assests/userproile.png')} />
     <View>
     <Text style={{color:'#fff',fontSize:25,lineHeight:30,fontWeight:'700',fontFamily:'Poppins',textTransform:'capitalize'}}>{userInfo.user.name}</Text>
<Text style={{color:'#fff',fontWeight:'400',fontSize:14,lineHeight:14,fontFamily:'Poppins',textTransform:'capitalize',paddingVertical:5}}>{userInfo.user.email}</Text>
     </View>
      
      </View>
      <View style={styles.iconsV}>
      {/* {count.notifications_count!=0?
      <TouchableOpacity onPress={notiication}>
              <Image resizeMode='cover' style={{height:25,width:25}} source={{uri:'https://cdn-icons-png.flaticon.com/128/891/891012.png'}}/>
        <View style={{overflow:'hidden',position: 'absolute', top: -10, right: -1,alignItems:'center',justifyContent:'center',height:18,width:18,borderRadius:9,backgroundColor:'red'}}>
        <Text style={{fontSize:16,alignSelf:'center',color:'#fff'}}>{count.notifications_count}</Text>
        </View>
      </TouchableOpacity>
      :
       <TouchableOpacity style={{paddingHorizontal:10}}>
       <Image resizeMode='cover' style={{height:25,width:25,tintColor:'#fff'}} source={{uri:'https://cdn-icons-png.flaticon.com/128/3602/3602145.png'}}/>
       </TouchableOpacity>} */}
       <TouchableOpacity onPress={logout}>
      <Image resizeMode='cover' style={{height:25,width:25,marginHorizontal:10}} source={require('../assests/power-off.png')}/>
      </TouchableOpacity>
      </View>
    
    
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        marginBottom:5,paddingBottom:5,
        height:60,
        width:'100%',paddingHorizontal:20,
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center',backgroundColor:COLORS.primary
    },
    elevation: {
      shadowColor: 'gray',
      elevation: 20,
    },
    iconsV:{
      flexDirection:'row'
    }
})