import React, {useContext, useState, useEffect} from 'react';
import { View, Text,StyleSheet ,Image,StatusBar} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Machnic from '../screens/Machnic';
import {AuthContext} from './AuthProvider';
import UserRequest from '../components/UserRequest';
import SearchMechanic from '../components/SearchMechanic';

const Tabs = () => {
  const {userInfo} = useContext(AuthContext);
    const Tab = createBottomTabNavigator();
    return (
      <>
         {userInfo.user.role==='user'?
       <Tab.Navigator
            screenOptions={{
              tabBarShowLabel:false,
              showLabel:false, 
                headerShown:false,
                tabBarStyle: {
                  backgroundColor:'#fff',
                  borderRadius: 15,
                  height: 60,
                  position:'absolute',
                  left:5,
                right:5,
                elevation:0,
                bottom:5
              }
              
                 
                
                
            }}
       >
           <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                           <Image source={require('../assests/icons/home.png')} 
                          style={{height:25,width:25,tintColor:focused?'#5b18b4':'#748c94'}}/>
                          <Text style={{color:focused?'#5b18b4':'#748c94',fontSize:12}}>
                            Home
                          </Text>
                        </View>
                    )
                }}

                />

            <Tab.Screen 
                name="SearchMechanic" 
                component={SearchMechanic} 
                options={{
                  tabBarIcon: ({focused}) => (
                      <View style={{alignItems:'center',justifyContent:'center'}}>
                          <Image source={require('../assests/icons/mechanic.png')} 
                        style={{height:25,width:25,tintColor:focused?'#5b18b4':'#748c94'}}/>
                        <Text style={{color:focused?'#5b18b4':'#748c94',fontSize:12}}>
                        Request
                        </Text>
                      </View>
                  )
              }}

            />
             <Tab.Screen 
                    name="Profile" 
                    component={Profile} 
                    options={{
                      tabBarIcon: ({focused}) => (
                          <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assests/icons/settings.png')} 
                            style={{height:25,width:25,tintColor:focused?'#5b18b4':'#748c94'}}/>
                            <Text style={{color:focused?'#5b18b4':'#748c94',fontSize:12}}>
                            Profile
                            </Text>
                          </View>
                      )
                  }}

            />
       </Tab.Navigator>
       :
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        showLabel:false, 
          headerShown:false,
          tabBarStyle: {
            backgroundColor:'#fff',
            borderRadius: 15,
            height: 60,
            position:'absolute',
            left:5,
          right:5,
          elevation:0,
          bottom:5
        } 
      }}
 >
    <Tab.Screen 
                name="UserRequest" 
                component={UserRequest} 
                options={{
                  tabBarIcon: ({focused}) => (
                      <View style={{alignItems:'center',justifyContent:'center'}}>
                          <Image source={require('../assests/icons/mechanic.png')} 
                        style={{height:25,width:25,tintColor:focused?'#5b18b4':'#748c94'}}/>
                        <Text style={{color:focused?'#5b18b4':'#748c94',fontSize:12}}>
                        UserRequest
                        </Text>
                      </View>
                  )
              }}

            />
             <Tab.Screen 
                    name="Profile" 
                    component={Profile} 
                    options={{
                      tabBarIcon: ({focused}) => (
                          <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../assests/icons/settings.png')} 
                            style={{height:25,width:25,tintColor:focused?'#5b18b4':'#748c94'}}/>
                            <Text style={{color:focused?'#5b18b4':'#748c94',fontSize:12}}>
                            Profile
                            </Text>
                          </View>
                      )
                  }}

            />
        </Tab.Navigator>}
       </>
    )
}

const styles=StyleSheet.create({
  shadow:{
  shadowColor: '#7f5df0' ,
  shadowOffset:{
    width:0,
    height:10
  },shadowOpacity:0.25,
  shadowRadius:3.5,elevation:5
  }
})

export default Tabs;