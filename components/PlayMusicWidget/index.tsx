import React from "react";
import { View, Text, Image, Touchable } from "react-native";
import styles from "./styles";
import {Circle, Svg} from 'react-native-svg';
import { LinearGradient } from "expo-linear-gradient";
import  Colors  from "../../constants/Colors";
const PlayMusicWidget = ({children}) =>{
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
export default PlayMusicWidget;