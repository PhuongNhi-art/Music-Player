import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Button
} from 'react-native';

import { Image } from 'react-native';
import styles from './styles';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { useEffect, useState } from 'react';
import StorageUtils from '../../utils/StorageUtils';

const SplashScreen = () => {
  const [email, setEmail] = useState<string | null>();
  const navigation = useNavigation();
  const getUserData = async () => {
    const email_value = await StorageUtils.getData(StorageUtils.USER_EMAIL);
    setEmail(email_value);
    // console.log('email value',email_value)
    // console.log(email)
    if (email_value!="" && email_value!=null) navigation.navigate('Root');
  }
  useEffect(() => {
    getUserData();
    return () => {

    }
  }, [])
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Image source={require('../../assets/images/logo.png')} style={styles.image} />
      <Text style={styles.title}>LIFEMUSIC</Text>
      <Text style={styles.text}>Music is not an entertainment, but also it is our life</Text>
      <View style={{ paddingTop: 50, alignItems: 'center' }}>
        <TouchableHighlight style={styles.buttonRegister}
          onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.textRegister}>
            REGISTER
          </Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
          <Text style={styles.textLogin}>Login</Text></TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Root')}>
          <Text style={styles.textLogin}>Next</Text></TouchableOpacity> */}
      </View>

    </View>
  );
}
export default SplashScreen;