import React, { useContext, useEffect, useState } from "react";
import { View, Text, StatusBar, Touchable, Image } from "react-native";
import { gestureHandlerRootHOC, TouchableOpacity } from "react-native-gesture-handler";
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
import Utils from "../../utils/Utils";
import { AppContext } from "../../utils/AppContext";
const PlayerScreen = (props: any) => {
  const songId = props.route.params.song;
  // console.log('songId', songId);
  // const { song } = useContext(AppContext);
  const navigation = useNavigation();
  const [dataSong, setDataSong] = useState<Song>();
  const [nextSong, setNextSong] = useState<Song>();
  const [previousSong, setPreviousSong] = useState<Song>();

  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<string>("0:00");
  const [position, setPosition] = useState<string>("0:00");
  const [durationTime, setDurationTime] = useState<number>(0);
  const [positionTime, setPositionTime] = useState<number>(0);
  const [muted, setMuted] = useState(true)
  const onPlayBackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying);
    setDuration(Utils.readTimestamp((status.durationMillis - status.positionMillis) / 1000));
    setPosition(Utils.readTimestamp(status.positionMillis / 1000));
    setDurationTime(status.durationMillis);
    // console.log('duration', status.durationMillis);
    setPositionTime(status.positionMillis);
  }
  const onPlayNext = async ()=>{
    
    
  
  await getDifferenceSong((nextSong!=null)?nextSong?._id:'');
   playCurrentSong();
  }
  const onPlayPrevious = async ()=>{
    
    await getDifferenceSong((previousSong!=null)?previousSong?._id:'');
    playCurrentSong();
  }
  const goTo = (value: number) => {
    // console.log(value)
    setPositionTime(value);
    setPosition(Utils.readTimestamp(value / 1000));
    // setPositionTime(value/100*durationTime);
    // setPosition(Utils.readTimestamp(value/1000));
  }
  const playCurrentSong = async () => {
    console.log('play song')
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);

    }
    const { sound: newSound } = await Sound.createAsync(
      { uri: (dataSong!=null)?dataSong.uri:""},

      { shouldPlay: isPlaying },
      onPlayBackStatusUpdate,

    )
    setSound(newSound)
  }
  const getProgress = () => {
    if (sound === null || durationTime === null || positionTime === null) {
      return 0;
    }
    // console.log('d',(positionTime / durationTime) * 100);
    return positionTime;
  }


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
  const getDifferenceSong = async (song: string) => {
    try {

      const response = await fetch(AppUrl.getByIdSong + "/" + song, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });

      const json = await response.json();
      if (response.status == 200) {

        setDataSong(json['message']);
        console.log('songId in',dataSong?.name);
        setPreviousSong(json['previousSong']);
        setNextSong(json['nextSong']);
        // console.log('data',dataCategories);
        console.log('loading song successful');
        // navigation.navigate('HomeScreen');
      }
      else {
        Toast.show(json['message']);
        console.log('loading song failed');
      }
    } catch (error) {

    }
  }
  const getSong = async () => {
    try {

      const response = await fetch(AppUrl.getByIdSong + "/" + songId, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });

      const json = await response.json();
      if (response.status == 200) {

        setDataSong(json['message']);
        console.log('songId in',dataSong?.name);
        setPreviousSong(json['previousSong']);
        setNextSong(json['nextSong']);
        // console.log('data',dataCategories);
        console.log('loading song successful');
        // navigation.navigate('HomeScreen');
      }
      else {
        Toast.show(json['message']);
        console.log('loading song failed');
      }
    } catch (error) {

    }
  }
  const reloadSong = async () => {
    // await sound.unloadAsync()
    if (!sound) {
      return;
    }


    await sound.replayAsync()

    // const { sound: newSound } = await Sound.createAsync(
    //     { uri:(dataSong?.uri!=null)?dataSong.uri:"https://www.dropbox.com/s/uf38gm3bjm948zu/VayGiu-VuongTinhVanKhongMap-6952041.mp3?dl=1"},

    //     { shouldPlay: isPlaying },
    //     onPlayBackStatusUpdate
    // )
    // setSound(sound)

  }
  const muteSound = async () => {
    if (sound) {
      setMuted(!muted);
      await sound.setIsMutedAsync(muted);
    }
  }

  useEffect(() => {
    getSong();
    playCurrentSong();
    // playCurrentSong();
    // getProgress();
    return () => {

    }
  }, [])
  // useEffect(()=>{
  //   if (dataSong){
  //     playCurrentSong();
  //   }
  // },[dataSong])
  return (
    <View style={{ backgroundColor: '#1A0938', flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Feather name="more-horizontal" size={20} color="#FFFFFF" />
      </View>
      <View style={styles.musicSection}>
        <Image source={{ uri: dataSong?.imageUri }} style={styles.imagePlayer} />
        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>{dataSong?.name}</Text>
          <Text style={styles.textArtist}>{dataSong?.idArtist.name}</Text>
        </View>
      </View>
      <View style={styles.sliderSection}>
        <Slider
          thumbStyle={{ height: 15, width: 15 }}
          minimumValue={0}
          maximumValue={durationTime}
          minimumTrackTintColor="#ED1BA3"
          maximumTrackTintColor="#464646"
          // value={positionTime}
          value={getProgress()}
          onValueChange={(value) => goTo(value)}
        //  onSlidingComplete={(value)=>goTo(value)}

        />
        <View style={styles.time}>
          <Text style={styles.textTime}>{position}</Text>
          <Text style={styles.textTime}>{duration}</Text>
        </View>
      </View>
      <View style={styles.controlSection}>
        <TouchableOpacity onPress={reloadSong}>
          <Feather name="refresh-cw" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.controlContainer}>
          <View style={styles.controlMusic}>
            <TouchableOpacity onPress={onPlayPrevious}>
            <Ionicons name="play-skip-back-outline" size={20} color="white" style={{ marginLeft: 24 }} />
            </TouchableOpacity>
            <View style={styles.playButton}>
              <TouchableOpacity onPress={onPlayPausePress} >
                <PlayButton play={isPlaying ? 'pause-outline' : 'play-outline'} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onPlayNext}>
            <Ionicons name="play-skip-forward-outline" size={20} color="white" style={{ marginRight: 24 }} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={muteSound}>
          <Ionicons name={muted ? "volume-high-outline" : "volume-mute-outline"} size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.lyricSection}>
        <AntDesign name="up" size={20} color="#22DDF2" />
        <Text style={styles.textLyrics}>Lyrics</Text>
      </View>
    </View>
  );
}



export default PlayerScreen;