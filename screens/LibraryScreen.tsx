
import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, FlatList, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { round } from 'react-native-reanimated';
import albumCategory from '../data/albumCategory';
import albumDetails from '../data/albumDetails';
import AlbumCategoryModel from '../models/AlbumCategoryModel';
import { Album } from '../types';
import { isTemplateElement } from '@babel/types';
import PlayMusicWidget from '../components/PlayMusicWidget';
import PlayButton from '../components/PlayButton';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Toast } from 'native-base';
import AppUrl from '../utils/AppUrl';
import Song from '../models/SongModel';
const LibraryScreen = () => {
  const [dataArtists, setDataArtists] = useState();
  const [dataSongs, setDataSongs] = useState<Array<Song>>([]);
  const getListArtist = async() => {
    try {
      
      const response = await fetch(AppUrl.getAllArtists, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      
      const json = await response.json();
      if (response.status==200){
       
        setDataArtists(json['message']);
        // console.log('data',dataCategories);
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
  const getListSong = async() => {
    try {
      
      const response = await fetch(AppUrl.getAllSongs, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      
      const json = await response.json();
      if (response.status==200){
       
        setDataSongs(json['message']);
        // console.log('data',dataCategories);
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
    getListArtist();
    getListSong();
    return ()=>{

    }
  },[])
  const RenderItem = (props: any) => {

    return (
      <View style={styles.containerItem}>
        <Image source={{ uri: props.type.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{props.type.name}</Text>
          {/* <Text style={styles.artist}>{props.albums.title}</Text> */}
        </View>

      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{flexDirection: 'row'}}>
      <FontAwesome name="user-circle-o" style={{paddingTop: 10,paddingLeft: 15,}} size={30} color="white" />
      <Text style={styles.text}>Library</Text>
      <View style={{flexDirection: 'row', flex: 1, paddingTop: 15,paddingLeft: 15,}}>
      <Ionicons name="ios-search-outline" size={22} color="white" style={{flex: 1}} />
      <AntDesign name="plus" size={22} color="white"style={{flex: 1}}  />
      </View>
      </View>
      <View>
        
        <View style={styles.titleSection}>
          <Text style={styles.textTitle}>Artists</Text>
          <TouchableWithoutFeedback onPress={() => console.log('Go to Playlist page')}>
            <AntDesign name="right" size={24} color="#22DDF2" />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={{ padding: 5, }}>
        <FlatList
          data={dataArtists}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RenderItem type={item} />}
          keyExtractor={(item) => item._id} />
      </View>

      <View style={styles.titleSection}>
        <Text style={styles.textTitle}>Favorite</Text>
        <TouchableWithoutFeedback onPress={() => console.log('Go to Playlist page')}>
          <AntDesign name="right" size={24} color="#22DDF2" />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{}}>

          {dataSongs.map((item, index) => {
            return (
              <View style={styles.favoriteItemView} key={index}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.musicCircle}>
                    <Image source={require('../assets/images/logo.png')} style={styles.musicIcon} />
                  </View>
                  <View style={styles.containerSong}>
                    <Text style={styles.titleSong}>{item.name}</Text>
                    <Text style={styles.artistSong}>{item.idArtist.name}</Text>
                  </View>

                </View><AntDesign name="hearto" size={24} color="#ED1BA3" />
              </View>
            );

          })}
        </ScrollView>
      </View>
      <View style={styles.bottomSection}>
        {/* <PlayMusicWidget/> */}
          {/* <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            marginHorizontal: 16,
            marginVertical: 12,
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Image source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg' }}
                style={{ width: 38, height: 38, borderRadius: 50 }} />
              <View style={{ marginLeft: 12 }}>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 16, color: '#FFFFFF'
                }}>Thunder</Text>
                <Text style={{
                  fontSize: 12, color: '#E7E7E7',
                  marginTop: 4
                }}>Imagine Dragon</Text>
              </View>
              
            </View><PlayButton />
          </View> */}

        {/* </PlayMusicWidget> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerItem:
  {
    // flex: 1,
    // flexDirection: 'row',
    margin: 10,

  },
  image: {
    width: 150,
    height: 180,
    borderRadius: 15,
    padding: 5,

  },
  text: {
    flex: 3,
    fontSize: 24,
    color: '#ED1BA3',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 15,
  },
  search: {
    width: 327,
    height: 52,
    borderRadius: 30,
    backgroundColor: '#361E60',
    marginTop: 24,
    marginLeft: 15,
    flexDirection: 'row'

  },
  icon: {
    marginLeft: 12,
    marginTop: 12
  },
  placeholder: {
    color: '#A7A7A7',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 5,
    // marginLeft: 12
  },
  titleSection: {
    marginHorizontal: 24,
    paddingTop: 10,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    color: '#E7E7E7',
  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 10,
  },

  title: {
    color: 'white',
    fontSize: 16,
    // paddingLeft: 5,
    // paddingTop: 5

  },
  artist: {
    color: 'lightgray',
    fontSize: 12,
    // paddingLeft: 5,
    // paddingTop: 5
  },
  favoriteItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 8,
  },
  musicCircle: {
    width: 42,
    height: 42,
    borderRadius: 42,
    backgroundColor: '#361E60',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleSong: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  artistSong: {
    fontSize: 12,
    color: 'lightgray',
  },
  containerSong: {
    paddingLeft: 10,
  },
  musicIcon: {
    width: 24,
    height: 24,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // position: 'absolute',
    bottom: 50,
    left: 0,
    // zIndex: 1,
    marginVertical: 0,
    marginHorizontal: 24,
  }
});
export default LibraryScreen;

