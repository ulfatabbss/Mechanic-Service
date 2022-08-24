import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './AuthProvider';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const {userInfo} = useContext(AuthContext);
  return (
    <NavigationContainer>
      {userInfo?.access_token? <AppStack/> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
