import React from 'react';

import SplashScreen from '../screens/SplashScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottomStacks';
import HomeScreen from '../screens/HomeScreen';
import SongScreen from '../screens/SongScreen';
import PlayerScreen from '../screens/PlayerScreen';


// export type RootStackParamList = {
//     SplashScreen: undefined;
//     SignupScreen: undefined;
//     SigninScreen: undefined;
//   };
const Stack = createStackNavigator();


const HomeStacks = () => (
  <Stack.Navigator initialRouteName="SplashScreen">
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="AlbumScreen"
      component={AlbumScreen}
      options={{
        headerShown: false,
      }}
    />
      {/* <Stack.Screen
      name="PlayerScreen"
      component={PlayerScreen}
      options={{
        headerShown: false,
      }}
    /> */}
    
  </Stack.Navigator>
);

export default HomeStacks;