import React from 'react';

import SplashScreen from '../screens/SplashScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottomStacks';
import PlayerScreen from '../screens/PlayerScreen';
import PlayerWidget from '../components/PlayerWidget';


// export type RootStackParamList = {
//     SplashScreen: undefined;
//     SignupScreen: undefined;
//     SigninScreen: undefined;
//   };
const Stack = createStackNavigator();


const Stacks = () => (
  <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SigninScreen"
      component={SigninScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignupScreen"
      component={SignupScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
       name="Root" 
      component={BottomTabNavigator} 
      options={{
        headerShown: false,}}/>
    {/* <Stack.Screen
      name="PlayerScreen"
      component={PlayerScreen}
      options={{
        headerShown: false,
      }}
    /> */}
    
    
  </Stack.Navigator>
);

export default Stacks;