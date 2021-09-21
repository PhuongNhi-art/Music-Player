import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, } from 'react-native';

import { Image } from 'react-native';
import styles from './styles';
import PlayButton from '../../components/PlayButton';


const SplashScreen = () =>{
  
  return (
    
    <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Image source={require( '../assets/images/logo.png')} style={styles.image}  />
        <Text style={styles.title}>LIFEMUSIC</Text>
        <Text style= {styles.text}>Music is not an entertainment, but also it is our life</Text>
        <View style={{paddingTop: 100, marginTop: 100}}>
        <PlayButton/>
        </View>

    </View>
  );
}
export default SplashScreen;