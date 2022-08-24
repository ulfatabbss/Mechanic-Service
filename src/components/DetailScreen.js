import { Text, View, Button, Image, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState,useEffect } from 'react'




const DetailScreen = ({route,navigation}) => {

    useEffect(() => {
    }, [setValue,setTitle])
    const {title,img}=route.params;
    const [value,setValue]=useState('');
    const [titles,setTitle]=useState('');
    const [isFocus,setIsFocus]=useState(false);
  return (
    <SafeAreaView style={styles.container}>
                <Image
                    resizeMode="contain"
                    source={img}
                    style={styles.backgroundImage}
                />

                {/* {renderLabel()} */}
           
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Videos')}}>
                    <Text style={{fontSize:16,color:'#fff',fontWeight:'bold'}}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:16,color:'#fff',fontWeight:'bold'}} onPress={()=>{navigation.navigate('Machnic')}}>Machanic</Text>
                </TouchableOpacity>
            </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    dropdown: {
        height: 50,
        width:Dimensions.get('window').width-100,
alignSelf:'center',
marginVertical:20,
        borderColor: 'black',
        borderWidth: 0.8,
        borderRadius: 8,
        paddingHorizontal: 20,

    },
    button: {
        width:Dimensions.get('window').width-200,
        alignItems:'center',justifyContent:'center',
        height: 50,
        margin: 1,
        marginVertical:20,
        padding: 8,
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        top: 20,
        borderRadius:20,
        backgroundColor:'#00CFFD'
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'black'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'black'
    },
    backgroundImage: {
        width: 350,
        height: 300,
        alignSelf:'center',marginVertical:0
    }
})