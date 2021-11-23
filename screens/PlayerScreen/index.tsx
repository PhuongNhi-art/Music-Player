import React, { useContext, useEffect, useState } from "react";
import { View, Text, StatusBar, Touchable, Image, PointPropType, Dimensions, Easing } from "react-native";
import { gestureHandlerRootHOC, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Slider } from 'react-native-elements';
import PlayButton from "../../components/PlayButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import Song from "../../models/SongModel";
import AppUrl from "../../utils/AppUrl";
import { Icon, Toast } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { Sound } from "expo-av/build/Audio";
import { Audio, Video } from 'expo-av';
import Utils from "../../utils/Utils";
import { AppContext } from "../../utils/AppContext";
import { Animated } from 'react-native';
// import StorageUtils from "../../utils/StorageUtils";

function PlayerScreen(props: any) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const songIdProps = props.route.params.song;
  const songUriProps = props.route.params.uri;

  const navigation = useNavigation();
  const [dataSong, setDataSong] = useState<Song>();
  const [nextSong, setNextSong] = useState<Song>();
  const [previousSong, setPreviousSong] = useState<Song>();
  const [repeat, setRepeat] = useState<string>('repeat-off');
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<string>("0:00");
  const [position, setPosition] = useState<string>("0:00");
  const [durationTime, setDurationTime] = useState<number>(0);
  const [positionTime, setPositionTime] = useState<number>(0);
  const [scroll, setScroll] = useState<number>(-1);
  const [muted, setMuted] = useState(true)
  const { songUri, songName, songImage, songId, songArtist, showPlayer, setShowPlayer,
    setSongId, setSongArtist, setSongName, setSongUri, setSongImage, } = useContext(AppContext);
  // const playbackObject = new Audio.Sound();

  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear, // Easing is an additional import from react-native
        useNativeDriver: true  // To make use of native driver for performance
      }
    )).start()
  

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  const onPlayBackStatusUpdate = (status: any) => {
    // console.log('postion', status.positionMillis)
    setIsPlaying(status.isPlaying);
    setDuration(Utils.readTimestamp((status.durationMillis - status.positionMillis) / 1000));

    setPosition(Utils.readTimestamp(status.positionMillis / 1000));
    setPositionTime(status.positionMillis);


    setDurationTime(status.durationMillis);
    // console.log('duration', status.durationMillis);


  }
  const onPlayNext = async () => {
    if (songIdProps != -1) {
      await getDifferenceSong((nextSong != null) ? nextSong?._id : '');
      if (sound) {
        sound.stopAsync();
        sound.loadAsync({ uri: (dataSong) ? dataSong.uri : "" }, {}, true)
        //sound.playAsync();
        // setSound(null);
      }
    }




    //  playCurrentSong();
  }
  const onPlayPrevious = async () => {
    if (songIdProps != -1) {
      await getDifferenceSong((previousSong != null) ? previousSong?._id : '');
      if (sound) {
        sound.stopAsync();
        sound.loadAsync({ uri: (dataSong) ? dataSong.uri : "" }, {}, true)
        // setSound(null);
      }
    }
  }
  const playCurrentSong = async () => {
    console.log('play song')
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);

    }

    const { sound: newSound } = await Sound.createAsync(

      { uri: (dataSong != null) ? dataSong.uri : "" },

      { shouldPlay: isPlaying },
      onPlayBackStatusUpdate,

    )
    setSound(newSound)

  }
  const playCurrentSongLocal = async () => {
    console.log('play song')
    
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);

    }

    const { sound: newSound } = await Sound.createAsync(

      { uri: (songUriProps != null) ? songUriProps : "" },

      { shouldPlay: isPlaying },
      onPlayBackStatusUpdate,

    )
    setSound(newSound)

  }
  // const playCurrentSong = (song: Song) =>{
  //   if (sound==null){
  //   const playbackObj = new Audio.Sound();
  //   const status = playbackObj.loadAsync({uri: song.uri}, {shouldPlay: isPlaying});
  //   setSound(status)
  // }

  //} 

  const onPlayPausePress = async () => {

    if (!sound) {
      return;
    }

    if (isPlaying) {
      setIsPlaying(!isPlaying);
      await sound.pauseAsync();
    } else {
      if (durationTime != null && positionTime == durationTime) {
        // setPositionTime(0);
        await sound.playFromPositionAsync(0)
      } else {
        setIsPlaying(!isPlaying);
        await sound.playAsync();
      }
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
        console.log('songId in', dataSong?.name);
        setPreviousSong(json['previousSong']);
        setNextSong(json['nextSong']);
        // console.log('data',dataCategories);
        console.log('loading song successful');
        // playCurrentSong()
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

      const response = await fetch(AppUrl.getByIdSong + "/" + songIdProps, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });

      const json = await response.json();

      if (response.status == 200) {

        setDataSong(json['message']);
        // await StorageUtils.saveData(StorageUtils.MUSIC, json['message']);
        // console.log('songId in', dataSong?.name);
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

  const muteSound = async () => {
    // console.log(durationTime)
    if (sound) {
      setMuted(!muted);
      await sound.setIsMutedAsync(muted);
    }
  }
  const listenRepeat = async () => {
    // console.log('listen repeat', repeat);
    if (!sound) {
      return;
    }
    if (positionTime == durationTime && durationTime != 0) {
      switch (repeat) {
        case "repeat-off": {

          break;
        }
        case "repeat": {
          await sound.replayAsync();
          break;
        }
        case "random": {
          if (songIdProps != -1) {
            await getDifferenceSong((nextSong != null) ? nextSong?._id : '');
            if (sound) {
              sound.stopAsync();
              sound.loadAsync({ uri: (dataSong) ? dataSong.uri : "" }, {}, true)
              // setSound(null);
            }
          }
          break;
        }
        default: {
          break;
        }
      }
    }
  }
  const onRepeat = () => {
    switch (repeat) {
      case "repeat-off": {
        setRepeat('repeat');
        break;
      }
      case "repeat": {
        setRepeat('random');
        break;
      }
      case "random": {
        setRepeat('repeat-off');
        break;
      }
      default: {
        break;
      }
    }
  }
  const handleSeek = async () => {
    // console.log('durationTime', durationTime);
    // console.log('positionTime', positionTime);
    // console.log('scroll', scroll);
    // // console.log(value);
    // console.log('value',scroll*durationTime);
    if (sound != null && durationTime != 0) {
      // console.log('move')
      // await sound.stopAsync();
      await sound.playFromPositionAsync(scroll * durationTime);
      setPositionTime(scroll * durationTime / 1000)
      setPosition(Utils.readTimestamp(scroll * durationTime / 1000));
    }
  };
  const goBack = async () => {
    if (sound != null) {
      //setShowPlayer(true);
      await sound.pauseAsync();
      // console.log(sound);


    }
    if (dataSong) {
      setSongId(dataSong._id)
      setSongUri(dataSong.uri)
      setSongName(dataSong.name)
      setSongImage(dataSong.imageUri)
      setSongArtist(dataSong.idArtist.name)
      setShowPlayer(true)
    }
    navigation.goBack()

    // await StorageUtils.saveData(StorageUtils.SHOW_PLAYER, 'true');
  }
  useEffect(() => {
    setShowPlayer(false)
    getSong();
    
    return () => {

    }
  },
    []);
  useEffect(() => {
    if (dataSong && songIdProps != -1) {

      playCurrentSong();
      // listenRepeat();
    } else if (songIdProps == -1) {
      playCurrentSongLocal();
    }
  }, [dataSong])
  // useEffect(() => {
  //   if (songIdProps==-1){
  //     playCurrentSongLocal();
  //   }
  // }, [songUriProps])
  useEffect(() => {
    listenRepeat();
  }, [positionTime])
  
  

  return (
    <View style={{ backgroundColor: '#1A0938', flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={goBack}>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Feather name="more-horizontal" size={20} color="#FFFFFF" />
      </View>
      <View style={styles.musicSection}>

        <Animated.Image
          style={[styles.imagePlayer, { transform: [{ rotate: spin }] }]} source={{ uri: (songIdProps != -1) ? dataSong?.imageUri : "https://www.dropbox.com/s/5ilwxklgybfvsec/music.jpg?dl=1" }} />

        <View style={styles.containerTitle}>
          <Text style={styles.textTitle}>{dataSong?.name}</Text>
          <Text style={styles.textArtist}>{dataSong?.idArtist.name}</Text>
        </View>
      </View>
      <View style={styles.sliderSection}>
        <View>
          <TouchableOpacity onPressOut={handleSeek}>
            <Slider
              onValueChange={setScroll}
              style={{ width: windowWidth * 0.9, height: 40 }}
              thumbStyle={{ height: 15, width: 15 }}
              value={positionTime}
              minimumValue={0}
              maximumValue={durationTime}
              minimumTrackTintColor="#ED1BA3"
              maximumTrackTintColor="#464646"
            // onSlidingStart={async () => {
            //   if (!isPlaying) return;

            //   try {
            //     await sound?.pauseAsync();
            //   } catch (error) {
            //     console.log('error inside onSlidingStart callback', error);
            //   }
            // }}
            // onSlidingComplete={async value => {
            //   await handleSeek(value)
            //   setPositionTime(0)
            // }}
            />
          </TouchableOpacity>
          {/* <Slider
          thumbStyle={{ height: 15, width: 15 }}
          // onValueChange={handleSeek}
          minimumValue={0}
          // // value={positionTime}
          // maximumValue={100}
          minimumTrackTintColor="#ED1BA3"
          maximumTrackTintColor="#464646"
          // value={positionTime}
        //   value={getProgress()}
        //   // onValueChange={(value) => goTo(value)}
        //  onSlidingComplete={(value)=>goTo(value)}

        /> */}
          <View style={styles.time}>
            <Text style={styles.textTime}>{position}</Text>
            <Text style={styles.textTime}>{duration}</Text>
          </View>
        </View></View>
      <View style={styles.controlSection}>
        <TouchableOpacity onPress={onRepeat}>
          {(repeat === 'repeat-off') || (repeat === 'repeat') ?
            <MaterialCommunityIcons name={(repeat === 'repeat-off') ? "repeat-off" : "repeat"} size={24} color="white" />
            : <FontAwesome name="random" size={23} color="white" />}
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