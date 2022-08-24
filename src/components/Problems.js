import { StyleSheet, Text, View,Image, Dimensions, SafeAreaView, TouchableOpacity, ScrollView,StatusBar,FlatList } from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import COLORS from '../content/color';
import { AuthContext } from '../navigation/AuthProvider';
import Spinner from 'react-native-loading-spinner-overlay';
import { OrientationLocker, PORTRAIT } from "react-native-orientation-locker";
import Header from './Header';
const width = Dimensions.get('window').width - 30;
const Card = ({data,navigation}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress = {()=> navigation.navigate('Player',{url:data.video_url})}
        >
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold', fontSize: 20,alignSelf:'center',color:'#000'}}>
            {data.title} 
          </Text>
          <Image source={require('../assests/video.png')} style={{height:40,width:40}}/>
        </View>
      </TouchableOpacity>
    );
  };
const Problems = ({route,navigation}) => {
    const {problems} = route.params;
    const [isLoading,setloding]=useState(true)
    const {userInfo} = useContext(AuthContext);
    const [vehicales,setVehicales]=useState('') 
    useEffect(() => {
        setloding(true)
      console.log(problems.video_url,'ppppppppppppp')
      setloding(false)
      },[]);
  return (
    <View style={{flex:1,alignItems:'center',backgroundColor:COLORS.white}}>
           <Spinner visible={isLoading} />
       <StatusBar
        animated={true}
        backgroundColor="#5b18b4"/>
        <OrientationLocker orientation={PORTRAIT} />
    <View style={styles.header}>
      <Image source={require('../assests/idea.png')} style={{height:30,width:30,marginRight:30}}/>
<Text style={styles.text}>Slect Problems
</Text>
    </View>
   <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 70,
        }}
        data={problems}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Card data={item} navigation={navigation} />;
        }}
      />
    </View>
  )
}

export default Problems

const styles = StyleSheet.create({
    card: {
        height: 60,
        backgroundColor: COLORS.light,
        width,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
      },
      header:{
        flexDirection:'row',
        marginBottom:5,
        height:60,
        width:'100%',paddingHorizontal:30,backgroundColor:'#5b18b4',
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