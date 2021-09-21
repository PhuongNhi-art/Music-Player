import React from "react";
import { View, Text, StatusBar, Touchable, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Slider } from 'react-native-elements';
import PlayButton from "../../components/PlayButton";
const PlayerScreen = () =>
{
    return (
        <View style={{backgroundColor: '#1A0938', flex: 1}}>
            <StatusBar barStyle={"light-content"}/>
                <View style={styles.headerSection}>
                    <TouchableOpacity>
                    <AntDesign name="left" size={20} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Feather name="more-horizontal" size={20} color="#FFFFFF" />
                </View>
            <View style={styles.musicSection}>
                <Image source={{uri:'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg' }} style={styles.imagePlayer}/>
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>Thunder</Text>
                    <Text style={styles.textArtist}>Macodnal</Text>
                </View>
            </View>
            <View style={styles.sliderSection}>
            <Slider
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor="#ED1BA3"
  maximumTrackTintColor="#464646"
  
/>
               <View style={styles.time}>
                    <Text style={styles.textTime}>0:17</Text>
                    <Text style={styles.textTime}>2:37</Text>
               </View>
            </View>
            <View style={styles.controlSection}>
            <Feather name="refresh-cw" size={20} color="white" />
            <View style={styles.controlContainer}>
                <View style={styles.controlMusic}>
                <Ionicons name="play-skip-back-outline" size={20} color="white" style={{marginLeft: 24}} />
                <View style={styles.playButton}>
                    <PlayButton/>
                </View>
                <Ionicons name="play-skip-forward-outline" size={20} color="white"  style={{marginRight: 24}}/>

                </View>
            </View>
            <Ionicons name="volume-high-outline" size={24} color="white" />
            </View>
            <View style={styles.lyricSection}>
            <AntDesign name="up" size={20} color="#22DDF2" />
            <Text style={styles.textLyrics}>Lyrics</Text>
            </View>
        </View>
    );
}
export default PlayerScreen;