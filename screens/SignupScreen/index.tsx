import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Text, 
  View, 
  StyleSheet, 
  StatusBar, 
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity} from 'react-native';

import styles from './styles';


const SignupScreen = () =>{
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
      
      <StatusBar barStyle={'light-content'}/>
        <View style={styles.logo}>
        <Image source={require( '../../assets/images/logo.png')} style={styles.imageLogo} />
        {/* <Text style={styles.textLogo}>LIFEMUSIC</Text> */}
        </View>
        <View style={{marginTop: 20,alignItems: 'center'}}>
        <View style={styles.loginSection}>
          <Text style={styles.textTitle}>SIGN UP</Text>
          <View style={{alignItems: 'center'}}>
          <TextInput style={styles.input}
          placeholder='Username' placeholderTextColor='#A7A7A7'
          keyboardType='default'
          />
          <TextInput style={styles.input}
          placeholder='Email'  placeholderTextColor='#A7A7A7'
          keyboardType='email-address'
          />
         
          <TextInput style={styles.input}
          placeholder='Password' placeholderTextColor='#A7A7A7'
          keyboardType='visible-password'
          />
          <TextInput style={styles.input}
          placeholder='Repeat password' placeholderTextColor='#A7A7A7'
          keyboardType='visible-password'
          />
          </View>
        </View>
        <TouchableHighlight style={styles.buttonLogin}
          onPress={()=>navigation.navigate('SignupScreen')}>
            <Text style={styles.textLogin}>
              SIGN UP
            </Text>
          </TouchableHighlight>
          <TouchableOpacity onPress={()=>navigation.navigate('SigninScreen')}>
            <Text style={styles.textRegister}>Login</Text></TouchableOpacity>
          </View>
    </View>
  );
}
export default SignupScreen;