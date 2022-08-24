import React, { useEffect,useState,useContext } from 'react'
import { StatusBar, Dimensions,SafeAreaView,StyleSheet,Text,View,Image } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from '../navigation/AppStack';
import AuthStack from '../navigation/AuthStack';

const Splash = () => {
    const {userInfo} = useContext(AuthContext);
    const [loading,setloding]=useState(true)
    useEffect(() => {
      setTimeout(() => {
setloding(false)
      }, 5000);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            {loading?
            <View style={{marginTop:100}}>
        <Text style={styles.text1}>
            Welcome!
        </Text>
        <View style={styles.view2}>
            <Image style={styles.img}
                resizeMode="contain"
                source={require('../assests/p1.png')}
            />
        </View>
        <Text style={styles.text2}>
            On Road Vehicle Breakdown Help Assistanc
        </Text>
        <Text style={styles.text3}>
            Lets Get Help
        </Text>
        </View>
        :
        <NavigationContainer>
        {userInfo.access_token? <AppStack/> : <AuthStack />}
      </NavigationContainer>}
    </SafeAreaView>
    )
}

export default Splash
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: 'white',
    },
    text1: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 30,
        width: 300,
        top: 20
    },
    text2: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 30,
        width: 300
    },
    text3: {
        textAlign: 'center',
        color: 'skyblue',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 30,
        width: 300
    },
    view1: {
        paddingVertical: 10,
        paddingHorizontal: 120 
    },
    view2: {
        justifyContent: 'center',
        alignItems:'center'
    },
    img: {
        width: 360,
        height: 500,
    }
})