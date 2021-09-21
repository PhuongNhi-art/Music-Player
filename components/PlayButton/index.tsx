
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };
const PlayButton = () => {
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
            <Image source={require('../../assets/images/arrow_right.png')} style={styles.image} />

        </View>
    );
}


export default PlayButton;