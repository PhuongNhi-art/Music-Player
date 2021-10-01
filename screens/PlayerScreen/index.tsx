import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, Touchable, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Slider } from 'react-native-elements';
import PlayButton from "../../components/PlayButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import Song from "../../models/SongModel";
import AppUrl from "../../utils/AppUrl";
import { Toast } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { Sound } from "expo-av/build/Audio";
const PlayerScreen = (props: any) =>{
    const songId = props.route.params.song;
    const navigation = useNavigation();
    const [dataSong, setDataSong] = useState<Song>();
    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);
    const onPlayBackStatusUpdate = (status: any) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setDuration(status.positionMillis);
    }
    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync()
        }
        const { sound: newSound } = await Sound.createAsync(
            { uri:(dataSong?.uri!=null)?dataSong.uri:""},
            
            { shouldPlay: isPlaying },
            onPlayBackStatusUpdate
        )
        setSound(newSound)
    }
    const onPlayPausePress = async () => {
        if (!sound) {
          return;
        }
        if (isPlaying) {
          await sound.stopAsync();
        } else {
          await sound.playAsync();
        }
      }
    const getSong = async() => {
      try {
        
        const response = await fetch(AppUrl.getByIdSong+"/"+songId, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        });
        
        const json = await response.json();
        if (response.status==200){
         
          setDataSong(json['message']);
          // console.log('data',dataCategories);
          console.log('loading categoriess successful');
          // navigation.navigate('HomeScreen');
        }
        else {
          Toast.show(json['message']);
          console.log('loading categories failed');
        }
      } catch (error) {
        
      }
    }
    
    
    useEffect(()=>{
      getSong();
      playCurrentSong();
      return ()=>{
  
      }
    },[])
    return (
        <View style={{backgroundColor: '#1A0938', flex: 1}}>
            <StatusBar barStyle={"light-content"}/>
                <View style={styles.headerSection}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Feather name="more-horizontal" size={20} color="#FFFFFF" />
                </View>
            <View style={styles.musicSection}>
                <Image source={{uri:dataSong?.imageUri }} style={styles.imagePlayer}/>
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>{dataSong?.name}</Text>
                    <Text style={styles.textArtist}>{dataSong?.artists}Macdonal</Text>
                </View>
            </View>
            <View style={styles.sliderSection}>
            <Slider
            thumbStyle={{height: 8, width: 8}}
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
                    <TouchableOpacity onPress={onPlayPausePress}>
                        <PlayButton play={isPlaying ? 'pause-outline' : 'play-outline'}/>
                        </TouchableOpacity>
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