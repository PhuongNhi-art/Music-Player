import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import AppNavigator from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator/>
    </SafeAreaProvider>
  );
}


