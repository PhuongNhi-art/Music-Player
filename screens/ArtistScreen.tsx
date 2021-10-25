import { Toast, View } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import SongListItem from "../components/SongListItems";
import Song from "../models/SongModel";
import AppUrl from "../utils/AppUrl";
import { StyleSheet } from "react-native";
const ArtistScreen = (props: any) => {
    const aritstId = props.route.params.idArtist;
   const [dataSongs, setDataSongs] = useState();
   const getListSong = async() => {
    try {
      // console.log('artistId', aritstId);
      const response = await fetch(AppUrl.getAllArtists+'/'+aritstId, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      
      const json = await response.json();
      if (response.status==200){
       
        setDataSongs(json['message'][0]['songs']);
        // console.log('data',json['message'][0]['songs']);
        console.log('loading artist successful');
        // navigation.navigate('HomeScreen');
      }
      else {
        Toast.show(json['message']);
        console.log('loading artist failed');
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    
    getListSong();
    return ()=>{

    }
  },[])
    return (
        <View style={styles.container}>
              <FlatList 
          data = {dataSongs}
          renderItem = {({item})=><SongListItem song={item}/>}
          keyExtractor = {(item)=> item._id}
          // ListHeaderComponent ={()=><View></View>} 
         />
        </View>
    )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    flex: 1,
  }
});
export default ArtistScreen;