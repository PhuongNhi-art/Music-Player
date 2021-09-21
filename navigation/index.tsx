import React from 'react';
// import { useColorScheme } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';

// import { useTheme, lightTheme, darkTheme } from 'Themes';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import Stacks from './stacks';


export default function AppNavigator() {
//   const theme = useTheme();
  return (
    <NavigationContainer>
      {/* Use TabStacks or Stacks below to display the bottom tabs or not */}
      <Stacks />
      {/* <TabStacks /> */}
    </NavigationContainer>
  );
}