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
import {useState} from 'react';

import styles from './styles';
// import Loader from '../../components/Loader';
import AppUrl from '../../utils/AppUrl';
import { Entypo } from '@expo/vector-icons'; 
import Feather from 'react-native-vector-icons/Feather';
// import { Toast } from 'native-base';
import Toast from 'react-native-simple-toast';
const SigninScreen = () => {
  const navigation = useNavigation();
  // const toast = useToast()
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const updateHiddenPassword = ()=>{
    setHiddenPassword(!hiddenPassword);
  }
  const onSubmit = async() => {
    try {
      const response = await fetch(AppUrl.LOGIN, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         email: email,
         password: password,
        })
      });
      const json = await response.json();
      if (response.status==200){
       
          Toast.show('Login success');
        console.log('login success');
        navigation.navigate('Root');
      }
      else {
        Toast.show(json['message']);
        console.log('login failed');
      }
    } catch (error) {
      
    }}
  //   await fetch(AppUrl.LOGIN, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //      email: email,
  //      password: password,
  //     })
  //   }).then(res=> res.json())
  //   .then(resData => {
  //     alert(resData.message);
  //     console.log(resData);
  //   });
  // }
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
              onChangeText = {(value)=> setEmail(value)}
            />
            <View style={styles.inputPassword}>
            <TextInput style={styles.textInput}
              secureTextEntry={hiddenPassword}
              autoCapitalize="none"
              placeholder='Password'
              placeholderTextColor='#A7A7A7'
              // keyboardType='visible-password'
            
              onChangeText={(value)=> setPassword(value)}
            />
            <TouchableOpacity onPress={updateHiddenPassword}
                    
                >
                    {hiddenPassword?
                    <Feather 
                    style={{padding: 10}}
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                     :
                    <Feather 
                    style={{padding: 10}}
                        name="eye"
                        color="grey"
                        size={20}
                    />}
                    
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>

          <TouchableHighlight style={styles.buttonLogin} onPress={onSubmit}
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

