import { StyleSheet, Text, View,Image,TouchableOpacity,StatusBar } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../navigation/AuthProvider';
import COLORS from '../content/color';
const Header = () => {
  const {isLoading, logout,userInfo} = useContext(AuthContext);
  return (
    <View style={styles.header}>
      <View style={{marginHorizontal:5,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <Image resizeMode='contain' style={{height:50,width:50,borderRadius:25,tintColor:'white',marginRight:15,}} source={require('../assests/userproile.png')} />
     <View>
     <Text style={{color:'#fff',fontSize:25,lineHeight:30,fontWeight:'700',fontFamily:'Poppins',textTransform:'capitalize'}}>{userInfo.user.name}</Text>
<Text style={{color:'#fff',fontWeight:'400',fontSize:14,lineHeight:14,fontFamily:'Poppins',textTransform:'capitalize',paddingVertical:5}}>{userInfo.user.email}</Text>
     </View>
      
      </View>
      <TouchableOpacity onPress={logout}>
      <Image resizeMode='cover' style={{height:25,width:25}} source={require('../assests/power-off.png')}/>
      </TouchableOpacity>
    
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
})