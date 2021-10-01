import React from "react";
import { View, Text, Image, Touchable } from "react-native";
// import styles from "./styles";
import {Circle, Svg} from 'react-native-svg';
import { LinearGradient } from "expo-linear-gradient";
import  Colors  from "../../constants/Colors";
import { StyleSheet } from "react-native";
const PlayMusicWidget = () =>{
    
    return (
        <View style = {styles.container}>
            <View style= {styles.container1}></View>
                <View style={styles.container2}>
                <LinearGradient
                colors={Colors.linearGradient2}
                start={{x:0, y:0}}
                end = {{x:1, y:1}}
                style= {styles.containerGradient}>
                </LinearGradient>
                <LinearGradient
                colors={Colors.linearGradient2}
                start={{x:0, y:0}}
                end = {{x:1, y:1}}
                style= {styles.containerGradient}>
                </LinearGradient>
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-end'
                }}>
                    <View style={{
                        width: 6, height: 6,
                        borderRadius: 6,
                        position: 'relative',
                        bottom: -1.5,
                        backgroundColor: '#6A8CCC'
                    }}>
                    <View
                    style={{width: 321- 84-150,
                    height: 3,
                    borderRadius: 3,
                    alignSelf:'flex-end',
                    backgroundColor:'#ED1BA3',
                    }}>
</View>
                    </View>
                </View>
                </View>
                {/* <Svg height={84} width={84}>
                    <Circle cx={42}
                    cy={42} r={40}
                    stroke={'#ED1A3'}
                    strokeWidth={3}
                    fill={'#361E60'}

                    />
                    </Svg> */}
            
                    <View style={styles.container3}>
                    {children}
                    </View>
                
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 321,
        height: 84,
        borderRadius: 84,
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'space-between',
         alignItems: 'flex-start',
 
    },
    container1: {
     width: 42, 
     height: 84
    },
    container2: {
     height: 84,
     marginLeft: 28,
     justifyContent: 'space-between'
    },
 //    container3: {
 
 //    },
    container3: {
        width: 321-84+70,
        height: 70,
        borderRadius: 70,
        backgroundColor: '#361E60',
        position: 'absolute',
        top: 0,
        left: 0,
        marginVertical: 7,
        marginHorizontal: 7
    },
    containerGradient: {
        width: 321 - 84,
        height: 3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }
 
 
 });
export default PlayMusicWidget;