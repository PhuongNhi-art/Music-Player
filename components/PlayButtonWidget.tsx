
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { TouchableOpacity } from "react-native-gesture-handler";

import { Ionicons } from '@expo/vector-icons';
import Colors from "../constants/Colors";
const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };
const PlayButtonWidget = (props: any) => {
    const {play} = props;
    // console.log(play);
    return (
        
        <View style={styles.container}>
            <LinearGradient
                start={start}
                end={end}
                // Button Linear Gradient
                colors={Colors.linearGradient1}
                style={[styles.circle,{left: 0,bottom: 0,}]} />
            <LinearGradient
                start={start}
                end={end}
                // Button Linear Gradient
                colors={Colors.linearGradient1}
                style={[styles.circle, {right: 0, bottom: 0}]} />
            <LinearGradient
                start={start}
                end={end}
                // Button Linear Gradient
                colors={Colors.linearGradient1}
                style={[styles.circle, {top: 0}]} />
            {/* <Image source={require('../../assets/images/arrow_right.png')} style={styles.image} /> */}
            <Ionicons name={play} size={30} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
    },
    image: {
        width: 20,
        height: 20,
        position: 'relative',
        zIndex: 1
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end'
    },
    circle: {
        position: 'absolute',
        opacity: 0.5,
        width: 47,
        height: 47,
        borderRadius: 47/2,

    }

});


export default PlayButtonWidget;