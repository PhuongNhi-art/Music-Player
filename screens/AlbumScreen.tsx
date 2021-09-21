
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/core';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from 'react-native';
import { AlbumProps } from '../components/Album';
import SongListItem from '../components/SongListItems';
import albumDetails from '../data/albumDetails';
import { FlatList } from 'react-native-gesture-handler';
import AlbumHeader from '../components/AlbumHeader';
const album = {}
const AlbumScreen = () =>{
  const route = useRoute();
  React.useEffect(()=>{
    console.log(route)}, 
    []);
  return (
      <View>
        
        <FlatList
          
          data = {albumDetails.songs}
          renderItem = {({item})=><SongListItem song={item}/>}
          keyExtractor = {(item)=>item.id}
          ListHeaderComponent ={()=><AlbumHeader album={albumDetails}/>}
        />
    </View>
  );
}
export default AlbumScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
function route(route: any) {
  throw new Error('Function not implemented.');
}

