import { View, Text, Dimensions, FlatList, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AppUrl from "../utils/AppUrl";
import { Toast } from "native-base";
import Song from "../models/SongModel";

import Artist from "../models/ArtistModel";
import Album from "../models/AlbumModel";
import SongListItem from "../components/SongListItems";
import AlbumItem from "../components/Album";
import ArtistItem from "../components/ArtistItem";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const SearchDetailScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [searchData, setSearchData] = useState<boolean>(false);
    const [searchKey, setSearchKey] = useState<string | null>(null);
    const [searchSong, setSearchSong] = useState<Array<Song> | null>(null);
    const [searchAlbum, setSearchAlbum] = useState<Array<Album> | null>(null);
    const [searchArtist, setSearchArtist] = useState<Array<Artist> | null>(null);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const onSubmitEdit = async() => {
        // whatever you want to do on submit
        // console.log('hello', searchKey)
        // console.log('load url', AppUrl.findByText + '/' + searchKey)
        try {

            const response = await fetch(AppUrl.findByText + '/' + searchKey, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            });
      
            const json = await response.json();
            console.log(json)
            if (response.status == 200) {
            //   console.log('find scucess')
              setSearchSong( json['message']['songs']);
              // console.log( json['message']['songs'])
              setSearchAlbum( json['message']['albums']);
              setSearchArtist( json['message']['artists']);
              if (searchSong!=null || searchAlbum !=null || searchArtist!=null ||
                searchSong!=undefined || searchAlbum !=undefined || searchArtist!=undefined||
                searchSong!=[] || searchAlbum !=[] || searchArtist!=[])
              {
                  setSearchData(true);
              }
              // console.log('data',searchData);
              // console.log('song',searchSong);
              // console.log('album',searchAlbum);
            }
            else {
              Toast.show(json['message']);
              console.log('loading find failed');
            }
          } catch (error) {
              console.log('loading find failed');
          }
        }
      
    return (
        <View style={{ flex: 1, backgroundColor: 'black'}}>
            <View style={{ backgroundColor: 'gray', flexDirection: 'row', height: 55, flex: 1 }}>
              <TouchableOpacity onPress={()=> navigation.navigate('SearchScreen')}>
                <Ionicons name="arrow-back" size={24} color="#E0E0E0" style={{ flex: 1, padding: 15 }} />
                </TouchableOpacity>
                <TextInput placeholder='Song or artist'
                    
                    autoCapitalize="sentences"
                    autoCorrect={true}
                    // onChangeText={(orderInstructions) => this.setState({orderInstructions})}
                    keyboardType="default"
                    returnKeyType="done"
                    onChangeText={text=>setSearchKey(text)}
                    onSubmitEditing={onSubmitEdit}
                    style={{ fontWeight: 'bold', flex: 6, padding: 10 }}
                    placeholderTextColor='#E0E0E0' />
                <Feather name="camera" size={24} color="#E0E0E0" style={{ flex: 1, padding: 15 }} />
            </View>
            {(searchData==false)?
            <View style={{flex: 10, justifyContent:'flex-start'}}>

                <Text style={{
                    color: 'white', fontWeight: 'bold', fontSize: 20,
                    textAlign: 'center', justifyContent: 'center', paddingTop: windowHeight / 3
                }}>
                    Play content you like</Text>
                <Text style={{ fontSize: 14, color: '#E0E0E0', padding: 10 }}>
                    Search for artists, songs, podcasts and more</Text>

            </View>
             :<View style={{flex: 10}}><ScrollView>
               {(searchArtist!=null || searchArtist!=undefined || searchArtist!=[])?
              <FlatList 
              data = {searchArtist}
              renderItem = {({item})=><ArtistItem artist={item}/>}
              keyExtractor = {(item)=> item._id}
            />:<View></View>}
            
              {(searchSong!=null || searchSong!=undefined || searchSong!=[])?
              <FlatList 
              
              data = {searchSong}
              renderItem = {({item})=><SongListItem song={item}/>}
              keyExtractor = {(item)=> item._id}
            />:<View></View>}
              {(searchAlbum!=null || searchAlbum!=undefined || searchSong!=[])?
              <FlatList 
              horizontal
              data = {searchAlbum}
              renderItem = {({item})=><AlbumItem album={item}/>}
              keyExtractor = {(item)=> item._id}
            />:<View></View>}
           
           </ScrollView></View>}
        </View>
    )
}
export default SearchDetailScreen;
