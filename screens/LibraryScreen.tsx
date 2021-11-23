
import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, FlatList, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
import * as MediaLibrary from 'expo-media-library';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
const LibraryScreen = () => {
  const [dataArtists, setDataArtists] = useState();
  const [dataSongs, setDataSongs] = useState<Array<Song>>([]);
  const [songLocal, setSongLocal] = useState<Array<any>>([])
  const navigation = useNavigation<StackNavigationProp<any>>();
  const getListArtist = async () => {
    try {

      const response = await fetch(AppUrl.getAllArtists, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });

      const json = await response.json();
      if (response.status == 200) {

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
  const getListSongLocal = async ()=>{
    const {status}= await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //console.log('res',res);
    if (status === "granted") {
      console.log('mediahello');
      let media = await MediaLibrary.getAssetsAsync({
        mediaType: 'audio',

      });
      
      media =
        await MediaLibrary.getAssetsAsync({
          mediaType: 'audio',
          first: media.totalCount,

        });
        
      media.assets.forEach(element => {
        if (element.duration > 60){//lay bai nhac duration 60s
          //console.log('media', element.duration, element.filename )
          //songArray.push(element)
          //setSongLocal(songArray)
          //songLocal.push(element)
          setSongLocal(songLocal => [...songLocal, element])
          //songLocal.push(element)
          //console.log('media1',element)
          //console.log('songLocal', songLocal)
        }
          //setSongLocal(songLocal => [...songLocal, element])
          //console.log('local', songLocal)
      });
      console.log('media',songLocal)

    }
  }
  const getListSong = async () => {
    try {

      const response = await fetch(AppUrl.getAllSongs, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });

      const json = await response.json();
      if (response.status == 200) {

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
  useEffect(() => {
    getListArtist();
    console.log('librayry hello');
    getListSongLocal();
    //getListSong();
    return () => {
      
    }
  }, [])
  
  const RenderItem = (props: any) => {
    const { artist } = props;
    // console.log(artist);
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ArtistScreen', { idArtist: artist._id })}>
        <View style={styles.containerItem}>
          <Image source={{ uri: artist.imageUri }} style={styles.image} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{artist.name}</Text>
            {/* <Text style={styles.artist}>{props.albums.title}</Text> */}
          </View>

        </View></TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ flexDirection: 'row' }}>
        <FontAwesome name="user-circle-o" style={{ paddingTop: 10, paddingLeft: 15, }} size={30} color="white" />
        <Text style={styles.text}>Library</Text>
        <View style={{ flexDirection: 'row', flex: 1, paddingTop: 15, paddingLeft: 15, }}>
          <Ionicons name="ios-search-outline" size={22} color="white" style={{ flex: 1 }} />
          <AntDesign name="plus" size={22} color="white" style={{ flex: 1 }} />
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
          renderItem={({ item }) => <RenderItem artist={item} />}
          keyExtractor={(item) => item._id} />
      </View>

      <View style={styles.titleSection}>
        <Text style={styles.textTitle}>On device</Text>
        <TouchableWithoutFeedback onPress={() => console.log('Go to Playlist page')}>
          <AntDesign name="right" size={24} color="#22DDF2" />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{}}>

          {songLocal.map((item, index) => {
            return (
              <View style={styles.favoriteItemView} key={index}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.musicCircle}>
                    <Image source={require('../assets/images/logo.png')} style={styles.musicIcon} />
                  </View>
                  <View style={styles.containerSong}>
                    <TouchableOpacity onPress={() => navigation.navigate("PlayerScreen", { song: -1, uri: item.uri })}>
                      <Text style={styles.titleSong}>{item.filename.slice(0, -4)}</Text>
                      {/* <Text style={styles.artistSong}>{item.idArtist.name}</Text> */}
                    </TouchableOpacity>
                  </View>

                </View><AntDesign name="hearto" size={24} color="#ED1BA3" />
              </View>
            );

          })}
          <View style={{ height: 80 }}></View>
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

