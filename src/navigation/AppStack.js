import React from 'react';
import {View, TouchableOpacity, Text,Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import DetailScreen from '../components/DetailScreen';
import Videos from '../components/Videos';
import Player from '../components/Player';
import Companies from '../components/Companies';
import Vehicales from '../components/Vehicales';
import Problems from '../components/Problems';
import SearchMechanic from '../components/SearchMechanic';
import SubmitRequest from '../components/SubmitRequest';
import CardView from '../components/CardView';
import EditProfile from '../components/EditProfile';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator  screenOptions={{
      headerShown: false
    }}>
         <Stack.Screen name="Tabs" component={Tabs}/>
         <Stack.Screen name="DetailScreen" component={DetailScreen}/>
         <Stack.Screen name="Videos" component={Videos}/>
         <Stack.Screen name="Player" component={Player}/>
         <Stack.Screen name="Companies" component={Companies}/>
         <Stack.Screen name="Vehicales" component={Vehicales}/>
         <Stack.Screen name="Problems" component={Problems}/>
         <Stack.Screen name="SearchMechanic" component={SearchMechanic}/>
         <Stack.Screen name="SubmitRequest" component={SubmitRequest}/>
         <Stack.Screen name="CardView" component={CardView}/>
         <Stack.Screen name="EditProfile" component={EditProfile}/>







         </Stack.Navigator>
  );
};

export default AppStack;
