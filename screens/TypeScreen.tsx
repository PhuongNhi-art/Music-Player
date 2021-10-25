import { Toast, View } from "native-base";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import SongListItem from "../components/SongListItems";
import Song from "../models/SongModel";
import AppUrl from "../utils/AppUrl";
import { StyleSheet } from "react-native";

const TypeScreen = (props: any) => {
    const typeId = props.route.params.idType;
   const [dataTypes, setDataTypes] = useState();
   const getListSong = async() => {
    try {
      console.log('typeId', typeId);
      const response = await fetch(AppUrl.getAllTypes+'/'+typeId, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      
      const json = await response.json();
      if (response.status==200){
      
        setDataTypes(json['message'][0]['songs']);
        // console.log(json['message'][0]['songs'])
        // console.log('data',dataTypes.songs);
        // console.log('loading artist successful');
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
          data = {dataTypes}
          renderItem = {({item})=><SongListItem song={item}/>}
          keyExtractor = {(item)=> item._id}
          ListHeaderComponent ={()=><View></View>}
        />
        </View>
    )
}
 {/* {(searchSong!=null || searchSong!=undefined || searchSong!=[])? */}
            //   <FlatList 
            //   data = {searchSong}
            //   renderItem = {({item})=><SongListItem song={item}/>}
            //   keyExtractor = {(item)=> item._id}
            // />:<View></View>}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    flex: 1,
  }
});
export default TypeScreen;