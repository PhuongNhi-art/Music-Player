import React, { useContext, useEffect, useState } from "react";
import { View, Image, Text, ActivityIndicator } from "react-native";
import Song from "../../models/SongModel";
import styles from "./styles";
import { Feather } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
// import { Toast } from "native-base";
import AppUrl from "../../utils/AppUrl";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppContext } from "../../utils/AppContext";
import Toast from 'react-native-simple-toast'
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
//import * as Location from 'expo-location';
export type SongListItemProps = {
    song: Song
}
const SongListItem = (props: SongListItemProps) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
    const [dataSong, setDataSong] = useState<Song>();
    const [loadingDowload, setLoadingDowload] = useState<number>(0);
    const { song } = props;
    
    const onPress = () => {
        // if (song){
        
        navigation.navigate("PlayerScreen",  {song: song._id, uri: null });
        // }
        // navigation.navigate("PlayerScreen");
    }
    const getSong = async() => {
        // let message = null;
        try {
          // console.log("album",albumId);
          const response = await fetch(AppUrl.getByIdSong+"/"+song._id, {
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
            console.log('loading data successful');
            // navigation.navigate('HomeScreen');
          }
          else {
            Toast.show(json['message']);
            console.log('loading data failed');
          }
          
        } catch (error) {
          
        }
        // return message;
      }
    
    useEffect(()=>{
        
        getSong();
        // console.log(getAlbums());
        // setDataAlbums();
        return ()=>{
    
        }
      },[])
    // const downloadMusic = ()=>{

    // }
    const downloadFile=()=>{
      console.log('download ne')
      setLoadingDowload(1);
      const uri = (dataSong)?dataSong?.uri:"";
      const name = (dataSong)?dataSong?.name:"";
      let fileUri = FileSystem.documentDirectory + name+".mp3";
      FileSystem.downloadAsync(uri, fileUri)
      .then(async ({ uri }) => {
          await saveFile(uri);
          Toast.show('Download successfully');
          setLoadingDowload(-1)
        })
        .catch(error => {
          console.error(error);
        })
  }
  
  const saveFile = async (fileUri: string) => {
    //let { status } = await Location.requestForegroundPermissionsAsync();
      //const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      //const {status} = await Camera.requestCameraPermissionsAsync()
     const res = await MediaLibrary.requestPermissionsAsync(true);
      //const 
      //if (status === "granted") {
        if (res.granted){
          
          await MediaLibrary.saveToLibraryAsync(fileUri)
         
      }
  }
  const loadingSwitch = ()=>{
    switch (loadingDowload){
      case 0: 
        return (
        <TouchableOpacity onPress={downloadFile}>
          <Feather name="download-cloud" size={24} color="white"  style={{paddingRight: 8}}/>
        </TouchableOpacity>
        );
        
      case 1: 
          return (<ActivityIndicator size="small" color="white" style={{paddingRight: 8}}/>);
      case -1: 
          return (<MaterialIcons name="devices" size={24} color="white" style={{paddingRight: 8}} />);
    }
  }
    return (
    
        <View style={styles.container}>
            
            <Image source={{uri: dataSong?.imageUri}} style={styles.image} />
           <View style={styles.rightContainer}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.title}>{props.song.name}</Text>
                    </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.lyrics}>
                       <Text style={{fontSize: 9}}>LYRICS</Text>
                    </View>
                    <Text style={styles.artist}>{dataSong?.idArtist.name}</Text>
                   
                    </View>
            </View>
            <View style={{paddingTop: 5, flexDirection: 'row'}}>
              {loadingSwitch()}
            </View>

        </View>
    )
}
export default SongListItem;