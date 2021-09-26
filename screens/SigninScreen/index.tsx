import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import styles from './styles';


const SigninScreen = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.container}>

      <StatusBar barStyle={'light-content'} />
      <View style={styles.logo}>
        <Image source={require('../../assets/images/logo.png')} style={styles.imageLogo} />
        {/* <Text style={styles.textLogo}>LIFEMUSIC</Text> */}
      </View>
      <View style={{ marginTop: 30, alignItems: 'center' }}>
        <View style={styles.loginSection}>
          <Text style={styles.textTitle}>LOGIN</Text>
          <View style={{ alignItems: 'center' }}>
            <TextInput style={styles.input}
              placeholder='Email' placeholderTextColor='#A7A7A7'
              keyboardType='email-address'
            />
            <TextInput style={styles.input}
              placeholder='Password'
              placeholderTextColor='#A7A7A7'
              keyboardType='visible-password'
            />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>

          <TouchableHighlight style={styles.buttonLogin}
          >
            <Text style={styles.textLogin}>
              LOGIN
            </Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.textRegister}>Register</Text></TouchableOpacity>
        </View></View>
    </View>
  );
}
export default SigninScreen;