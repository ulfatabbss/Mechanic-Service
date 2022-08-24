import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert} from 'react-native'
import GetLocation from 'react-native-get-location'
import React, {createContext, useEffect, useState} from 'react';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [Clocation, setLocation] = useState('');

const PymentRequest=(rr_id,card_nubmer,amount,description,category_id)=>{
  var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('title',rr_id);
data.append('description',description);
data.append('category_id',category_id);

var config = {
  method: 'post',
  url: `https://abdulrauf.laraartisan.com/api/payment/pay?rr_id=${rr_id}&amount=${amount}&card_nubmer=${card_nubmer}`,
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${userInfo.access_token}`,
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}

  
  const register = (name,email,password,confrom,role) => {
    setIsLoading(true);
    axios
      .post('https://abdulrauf.laraartisan.com/api/auth/register', {
        name,
        email,
        password,
        confrom,role
      })
    .then(res => {
      let userInfo = res.data;
      console.log(userInfo);
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        Alert.alert(
          'Welcom register successfull...'
       )
         setIsLoading(false)})
      .catch(error => {console.log('error', error)
      Alert.alert(
        'error', error
     )
      setIsLoading(false)});
  };
  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post('https://abdulrauf.laraartisan.com/api/auth/login', {
        email,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        Alert.alert(
          'Welcom Login successfull...'
       )
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        Alert.alert(
          `login error ${e}`
       )
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    let userInfo = null;
    setUserInfo(userInfo);
    AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      }

  const categories=()=>{
    setIsLoading(true);
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
      console.log(JSON.stringify(response.data.data));
      setCategories(response.data.data)
    })
    .catch(function (error) {
      Alert.alert(
        error
     )
      console.log(error);
    });
  }

  const getLocation=async ()=>{
  await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
    })
    .then(location => {
        console.log(location);
        let Clocation=location;
        setLocation(Clocation);
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
}
  useEffect(() => { 
    getLocation()
     }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
        login,Clocation,
        logout,categories,PymentRequest
      }}>
      {children}
    </AuthContext.Provider>
  );
};