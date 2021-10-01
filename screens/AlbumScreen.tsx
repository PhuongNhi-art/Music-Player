
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { useState, useEffect } from 'react';
import Toast from 'react-native-simple-toast';
import AppUrl from '../utils/AppUrl';
import SongListItem from '../components/SongListItems';
import AlbumHeader from '../components/AlbumHeader';
import { Album } from '../types';
// export type AlbumProps = {
//   album: Album

// }
export default function AlbumScreen(props: any) {
  // const route = useRoute();
  const albumId = props.route.params.albumId;
  const [dataAlbums, setDataAlbums] = useState();
  
  // const getAlbums = async() => {
  //   let message = null;
  //   try {
  //     console.log("album",albumId);
  //     const response = await fetch(AppUrl.getByIdAlbum+"/"+albumId, {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //     });
      
  //     const json = await response.json();
  //     // setDataAlbums(json['message']);
  //     message = json['message'];
  //     if (response.status==200){
       
  //       // setDataAlbums(message);
  //       //json array
  //       // console.log(message);
  //       console.log('dataAlbum',dataAlbums);
  //       console.log('loading album successful');
  //       // navigation.navigate('HomeScreen');
  //     }
  //     else {
  //       Toast.show(json['message']);
  //       console.log('loading album failed');
  //     }
  //   } catch (error) {
      
  //   }
  //   return message;
  // }
  const getAlbums = async() => {
    // let message = null;
    try {
      // console.log("album",albumId);
      const response = await fetch(AppUrl.getByIdAlbum+"/"+albumId, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      
      const json = await response.json();
      if (response.status==200){
       
        setDataAlbums(json['message'][0]);
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
    
    getAlbums();
    // console.log(getAlbums());
    // setDataAlbums();
    return ()=>{

    }
  },[])
  // const [labelWidth, setLabelWidth] = useState(0);
  // React.useEffect(() => {
  //   setLabelWidth(5);
  //   console.log("After mount:", labelWidth);
  // }, [labelWidth]);
  // console.log("Current value:", labelWidth);
  // let labelWidth = 0
  // React.useEffect(() => {
  //   labelWidth = 5;
  //   console.log("After mount:", labelWidth);
  // }, []);
  // console.log("Current value:", labelWidth);
  
  // console.log(dataAlbums);
  if (!dataAlbums) {
    return <Text>Loading ...</Text>
  }
  return (
   
      <View style={styles.container}>
        {/* <Text style={{color: "white", fontSize: 20}}>Hello{dataAlbums.name}</Text> */}
        <FlatList 
          data = {dataAlbums.songs}
          renderItem = {({item})=><SongListItem song={item}/>}
          keyExtractor = {(item)=> item._id}
          ListHeaderComponent ={()=><AlbumHeader album={dataAlbums}/>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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


