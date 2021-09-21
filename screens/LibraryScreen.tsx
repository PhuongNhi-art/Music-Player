
import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, FlatList, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { round } from 'react-native-reanimated';
import albumCategory from '../data/albumCategory';
import albumDetails from '../data/albumDetails';
import AlbumCategoryModel from '../models/AlbumCategoryModel';
import { Album } from '../types';
import { isTemplateElement } from '@babel/types';
import PlayMusicWidget from '../components/PlayMusicWidget';
import PlayButton from '../components/PlayButton';
const LibraryScreen = () => {

  const RenderItem = (props: any) => {

    return (
      <View style={styles.containerItem}>
        <Image source={{ uri: props.albums.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{props.albums.title}</Text>
          <Text style={styles.artist}>{props.albums.title}</Text>
        </View>

      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Library</Text>
      <View>
        <View style={styles.search}>
          <AntDesign name="search1" size={24} color="white" style={styles.icon} />
          <TextInput placeholder='Song or artist'
            placeholderTextColor='#A7A7A7' style={styles.placeholder} /></View>
        <View style={styles.titleSection}>
          <Text style={styles.textTitle}>Playlists</Text>
          <TouchableWithoutFeedback onPress={() => console.log('Go to Playlist page')}>
            <AntDesign name="right" size={24} color="#22DDF2" />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={{ padding: 5, }}>
        <FlatList
          data={albumCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <RenderItem albums={item} />}
          keyExtractor={(item) => item.id} />
      </View>

      <View style={styles.titleSection}>
        <Text style={styles.textTitle}>Favorite</Text>
        <TouchableWithoutFeedback onPress={() => console.log('Go to Playlist page')}>
          <AntDesign name="right" size={24} color="#22DDF2" />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{}}>

          {albumDetails.songs.map((item, index) => {
            return (
              <View style={styles.favoriteItemView} key={index}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.musicCircle}>
                    <Image source={require('../assets/images/logo.png')} style={styles.musicIcon} />
                  </View>
                  <View style={styles.containerSong}>
                    <Text style={styles.titleSong}>{item.title}hello</Text>
                    <Text style={styles.artistSong}>{item.artist}</Text>
                  </View>

                </View><AntDesign name="hearto" size={24} color="#ED1BA3" />
              </View>
            );

          })}
        </ScrollView>
      </View>
      <View style={styles.bottomSection}>
        <PlayMusicWidget>
          <View style={{
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
          </View>

        </PlayMusicWidget>
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
    fontSize: 28,
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
    color: 'white',
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

