import React, { useContext, useEffect, useState } from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { Dimensions } from 'react-native';

import PlayButton from "./PlayButton";
import PlayButtonWidget from "./PlayButtonWidget";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageUtils from "../utils/StorageUtils";
import { Sound } from "expo-av/build/Audio";
import { AppContext } from "../utils/AppContext";
import AppUrl from "../utils/AppUrl";
import Song from "../models/SongModel";
import { Toast } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const PlayerWidget = (props:any) => {
    
    // const [song, setSong] = useState<Song>();
    const [nextSong, setNextSong] = useState<Song>();
    const [previousSong, setPreviousSong] = useState<Song>();
    const [sound, setSound] = useState<Sound|null>(null);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number|null>(null);
    const [position, setPosition] = useState<number|null>(null);
  

    const { songId,setSongId, songName, songArtist, songUri, songImage } = useContext(AppContext);
    // console.log(songUri);
    const {screen} = props;
   
    const onPlaybackStatusUpdate = (status: any) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
      }
    
      const playCurrentSong = async () => {
        //   console.log(songUri);
        if (sound) {
          await sound.unloadAsync();
        }
    
        const { sound: newSound } = await Sound.createAsync(
          { uri: songUri?songUri:""},
          { shouldPlay: isPlaying },
          onPlaybackStatusUpdate
        )
          setIsPlaying(!isPlaying)
        setSound(newSound)
      }
    
      useEffect(() => {
        if (songUri!="") {
          playCurrentSong();
        }
      }, [songId])
    const onPlayPausePress = async () => {
        if (!sound) {
          return;
        }
        if (isPlaying) {
            setIsPlaying(!isPlaying);
          await sound.pauseAsync();
        } else {
            setIsPlaying(!isPlaying);
          await sound.playAsync();
        }
      }
    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
          return 0;
        }
    
        return (position / duration) * 100;
      }
    const goToPlayerScreen = ()=>{
      console.log('go to player screen');
      setIsPlaying(!isPlaying);
      // navigation.navigate("PlayerScreen",  {song: songId });
     
      // navigation.navigate('HomeScreen');
      // console.log(screen);
      // setSongId("");
    }
    return (
        (songId != "") ?
            <View style={styles.container}>
                <View style={[styles.progress, { width: `${getProgress()}%`}]}>
                {/* <View style={styles.progress}> */}
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: songImage}}
                            style={styles.image} />
                    </View>
                    
                    <View style={styles.textContainer}>
                    <TouchableOpacity onPress={goToPlayerScreen}>
                        <Text style={styles.textName}>{songName}</Text>
                        <Text style={styles.textArtist}>{songArtist}</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={onPlayPausePress}>
                        <PlayButtonWidget play={isPlaying ? 'pause-outline' : 'play-outline'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            : <View></View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: windowWidth * 0.95,
        position: 'absolute',
        bottom: 52,
        height: windowHeight * 0.1,
        backgroundColor: '#361E60',
        flexDirection: 'column',
        marginLeft: 8,
        paddingLeft: 5,
        paddingRight: 5,
        // alignItems: 'flex-start',
        borderRadius: windowWidth * 0.95 / 2,
        borderColor: '#5B17D0',
        borderWidth: 0.15
        // alignItems: 'center',
    },
    progress: {
        height: 2,
        marginTop: 1,
        backgroundColor: '#AA277C',
        // width: windowWidth * 0.8,
        marginLeft: windowWidth*0.08,
        marginRight: windowWidth*0.08,
        

    },
    image: {
        width: windowHeight * 0.08,
        height: windowHeight * 0.08,
        borderRadius: windowHeight * 0.08 / 2,
        borderColor: '#552D9B',
        borderWidth: 1
    },
    imageContainer: {
        padding: 5,
        flex: 1,
    },
    textContainer: {
        flex: 3,
        padding: 5,
    },
    textName: {
        fontSize: 16,
        textDecorationStyle: 'solid',
        fontWeight: 'bold',
        color: 'white',
    },
    textArtist: {
        fontSize: 14,
        color: 'white'
    },
    buttonContainer: {
        flex: 1,
        padding: 3,
    }
});
export default PlayerWidget;