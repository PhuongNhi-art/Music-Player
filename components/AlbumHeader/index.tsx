
import React, { useContext } from 'react';
import {
    View, Text,ImageBackground
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Album } from "../../types";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";
import StorageUtils from "../../utils/StorageUtils";
import { AppContext } from "../../utils/AppContext";
import Song from "../../models/SongModel";
import AppUrl from "../../utils/AppUrl";
import { Toast } from "native-base";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";
export type AlbumHeaderProps = {
    album: Album,
}
const AlbumHeader = (props: AlbumHeaderProps) => {
    // console.log(props.album);
    const { album } = props;
    const [song, setSong] = useState<Song>();
    const {songUri,setSongId, setSongArtist, setShowPlayer,
        setSongName, setSongUri, setSongImage} = useContext(AppContext);
    // constructor=()=>{
        
    // }
    const navigation = useNavigation();
    const playWidget = async()=> {
        // await getSong();
        if (song){
                    
            setSongId(song._id);
            setSongImage(song.imageUri);
            setSongUri(song.uri);
            setShowPlayer(true)
            setSongName(song.name);
            setSongArtist(song.idArtist.name);
        }
    }
     const getSong = async () => {
        try {

            const response = await fetch(AppUrl.getFirstSong + "/" + album._id, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            const json = await response.json();
            // await setSong(json['message']);
            if (response.status == 200) {

                setSong(json['message']);
                
               

                // console.log('loading song successful');
                // navigation.navigate('HomeScreen');
            }
            else {
                // Toast.show(json['message']);
                console.log('loading song failed');
            }
            
        } catch (error) {

        }
    }
    const onBack = ()=>{
        
        navigation.goBack()
      }
    useEffect(()=>{
        getSong();
        return () => {

        }
    })

    return (
        <View style={styles.container}>
            <LinearGradient style={{padding: 10}}
                colors={Colors.linearGradient3}
                start={{x:1, y:0}}
                end = {{x:1, y:1}}>
                    <TouchableOpacity onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
                <ImageBackground source={{ uri: album.imageUri }} style={styles.image} blurRadius={0.5}>
                    <Text style={styles.name} >
                        {album.name}
                    </Text>
                </ImageBackground>
                {/* <Text style={styles.name}>{album.name}</Text> */}
                </View>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.artistsHeadline}</Text>
                <Text style={styles.like}>{album.numberOfLikes} Likes</Text>

            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', flex: 3, padding: 10 }}>
                    <AntDesign name="hearto" size={24} color="lightgray" style={{ paddingRight: 10 }} />
                    <Feather name="more-vertical" size={24} color="lightgray" />
                </View>
                <TouchableOpacity onPress={playWidget}>
                    <View style={styles.button}>
                        <FontAwesome name="play" size={24} color="black" style={styles.buttonText} />
                    </View>
                </TouchableOpacity></View></LinearGradient>
        </View>
    );
}
export default AlbumHeader;