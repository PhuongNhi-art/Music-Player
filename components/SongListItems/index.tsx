import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import Song from "../../models/SongModel";
import styles from "./styles";
import { Feather } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { Toast } from "native-base";
import AppUrl from "../../utils/AppUrl";
export type SongListItemProps = {
    song: Song
}
const SongListItem = (props: SongListItemProps) => {
    const navigation = useNavigation();
    const [dataSong, setDataSong] = useState<Song>();
    const { song } = props;
    const onPress = () => {
        
        navigation.navigate("PlayerScreen",  {song: song._id });
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
            <View style={{paddingTop: 5}}>
            <Feather name="more-vertical" size={24} color="white" />
            </View>

        </View>
    )
}
export default SongListItem;