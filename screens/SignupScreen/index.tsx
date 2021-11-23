import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useState } from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { useEffect, useRef } from 'react'
import Toast from 'react-native-simple-toast';
import AppUrl from '../../utils/AppUrl';
const SignupScreen = () => {
  const messagesEndRef = useRef(null)
  const navigation = useNavigation();
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repassword, setRePassword] = useState<string>('');
  const [hiddenPass, setHiddenPass] = useState<boolean>(true);
  const [hiddenRePass, setHiddenRePass] = useState<boolean>(true);
  const updateHiddenPassword = () => {
    setHiddenPass(!hiddenPass)
  }
  const updateReHiddenPassword = () => {
    setHiddenRePass(!hiddenRePass)
  }
  const onSubmit = async() => {
    try {
      const response = await fetch(AppUrl.REGISTER, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         email: email,
         password: password,
         username: username,
         repeat_password: repassword,
        })
      });
      const json = await response.json();
      if (response.status==200){
       
          Toast.show('Register successful');
        console.log('Register successful');
        // navigation.navigate('HomeScreen');
        navigation.navigate('Root');
      }
      else {
        Toast.show(json['message']);
        console.log('register failed');
      }
    } catch (error) {
      
    }}
  return (
    
    <View style={styles.container}>
<ScrollView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.logo}>
        <Image source={require('../../assets/images/logo.png')} style={styles.imageLogo} />
        {/* <Text style={styles.textLogo}>LIFEMUSIC</Text> */}
      </View>
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <View style={styles.loginSection}>
          <Text style={styles.textTitle}>SIGN UP</Text>
          
            <TextInput style={styles.input}
              placeholder='Username' placeholderTextColor='#A7A7A7'
              keyboardType='default'
              onChangeText={(value) => setUsername(value)}
            />
            <TextInput style={styles.input}
              placeholder='Email' placeholderTextColor='#A7A7A7'
              keyboardType='email-address'
              onChangeText={(value) => setEmail(value)}
            />
            <View style={styles.inputPassword}>
              <TextInput style={styles.textPassword}
                placeholder='Password' placeholderTextColor='#A7A7A7'
                secureTextEntry={hiddenPass}
                onChangeText= {(value)=> setPassword(value)}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={updateHiddenPassword}

              >
                {hiddenPass ?
                  <Feather
                    style={{ padding: 10 }}
                    name="eye-off"
                    color="grey"
                    size={20}
                  />
                  :
                  <Feather
                    style={{ padding: 10 }}
                    name="eye"
                    color="grey"
                    size={20}
                  />}

              </TouchableOpacity>
            </View>
            <View style={styles.inputPassword}>
              <TextInput style={styles.textPassword}
                placeholder='Repeat password' placeholderTextColor='#A7A7A7'
                secureTextEntry={hiddenRePass}
                autoCapitalize="none"
                onChangeText={(value)=> setRePassword(value)}
              />
              <TouchableOpacity onPress={updateReHiddenPassword}

              >
                {hiddenRePass ?
                  <Feather
                    style={{ padding: 10 }}
                    name="eye-off"
                    color="grey"
                    size={20}
                  />
                  :
                  <Feather
                    style={{ padding: 10 }}
                    name="eye"
                    color="grey"
                    size={20}
                  />}

              </TouchableOpacity>
            </View>
          
        </View>
        <TouchableHighlight style={styles.buttonLogin}
          onPress={onSubmit}>
          <Text style={styles.textLogin}>
            SIGN UP
          </Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
          <Text style={styles.textRegister}>Login</Text></TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}
export default SignupScreen;