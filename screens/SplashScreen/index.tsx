import * as React from 'react';
import { Text, 
  View, 
  StyleSheet, 
  StatusBar,
  Button } from 'react-native';

import { Image } from 'react-native';
import styles from './styles';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const SplashScreen = () =>{
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Image source={require( '../../assets/images/logo.png')} style={styles.image}  />
        <Text style={styles.title}>LIFEMUSIC</Text>
        <Text style= {styles.text}>Music is not an entertainment, but also it is our life</Text>
        <View style={{paddingTop: 50, alignItems: 'center'}}>
          <TouchableHighlight style={styles.buttonRegister}
          onPress={()=>navigation.navigate('SignupScreen')}>
            <Text style={styles.textRegister}>
              REGISTER
            </Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={()=>navigation.navigate('SigninScreen')}>
            <Text style={styles.textLogin}>Login</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Root')}>
            <Text style={styles.textLogin}>Next</Text></TouchableOpacity>
        </View>

    </View>
  );
}
export default SplashScreen;