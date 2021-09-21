import React from 'react';
import { Text, View } from 'react-native';

import SplashScreen from '../screens/SplashScreen';
import SignupScreen from '../screens/SignupScreen';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
    SplashScreen: undefined;
    SignupScreen: undefined;
  };
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
      name="SignupScreen"
      component={SignupScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Stacks;