import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, } from 'react-native';

import { Image } from 'react-native';
import styles from './styles';
import PlayButton from '../../components/PlayButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const SplashScreen = () =>{
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('SignupScreen');
  }
  return (
    <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Image source={require( '../../assets/images/logo.png')} style={styles.image}  />
        <Text style={styles.title}>LIFEMUSIC</Text>
        <Text style= {styles.text}>Music is not an entertainment, but also it is our life</Text>
        <View style={{paddingTop: 100}}>
        <TouchableOpacity onPress={onPress}><PlayButton/></TouchableOpacity>
        </View>

    </View>
  );
}
export default SplashScreen;