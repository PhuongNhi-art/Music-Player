import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import AppNavigator from './navigation';
import { useState, useMemo} from 'react';
import { useEffect } from 'react'
// import {Provider} from 'react-redux';
// import store from './store';
// const AppRedux = () => {
//   <Provider {..{store}}>

//   </Provider>
// }
export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [userToken, setUserToken] = useState(null);
  
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  })
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
        <ActivityIndicator size='large'  color="#0000ff"/>
      </View>
    );
  } else 
  return (
    <SafeAreaProvider>
      <AppNavigator/>
    </SafeAreaProvider>
  );
}


