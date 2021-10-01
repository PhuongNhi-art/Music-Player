import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import Colors from '../constants/Colors';
import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AlbumItem from '../components/Album/index';
import AlbumCategoryItem from '../components/AlbumCategory/index';
import albumCategory from '../data/albumCategory';
import { FlatList } from 'react-native-gesture-handler';
import {
  Foundation,
  EvilIcons,
  FontAwesome,
  Entypo,
  Ionicons,
  SimpleLineIcons
} from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import Toast from 'react-native-simple-toast';
import AppUrl from '../utils/AppUrl';
import { Item } from 'native-base';
import PlayerWidget from '../components/PlayerWidget';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [dataCategories, setDataCategories] = useState();
  const getListCategories = async() => {
    try {
      
      const response = await fetch(AppUrl.getAllCategories, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      
      const json = await response.json();
      if (response.status==200){
       
        setDataCategories(json['message']);
        // console.log('data',dataCategories);
        console.log('loading categoriess successful');
        // navigation.navigate('HomeScreen');
      }
      else {
        Toast.show(json['message']);
        console.log('loading categories failed');
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getListCategories();
    return ()=>{

    }
  },[])
  // console.log(dataCategories);
  return (
    
    <View style={styles.container}><StatusBar barStyle="light-content" />
      <ScrollView>
        <View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={styles.text}>Mới phát gần đây</Text>
      <View style={styles.iconContainer}>
        <Ionicons name="ios-notifications-outline" style={stylesIcon.icon} />
        <SimpleLineIcons name="settings" style={stylesIcon.icon} />
        <Entypo name="back-in-time" style={stylesIcon.icon} />
      </View></View>
      {/* <AlbumItem album = {album}/> */}
      
      <FlatList
        data={dataCategories}
        
        renderItem={({ item }) => <AlbumCategoryItem title={item.title} albums={item.albums} _id={item._id} />}
        keyExtractor={(item) => item._id } />
        </View>
        </ScrollView>
        {/* <PlayerWidget/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
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
  text: {
    
    color: '#ED1BA3',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 3,
    paddingLeft: 10,

  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row'

  }
});
const stylesIcon = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    

  },
  icon: {
    padding: 5,
    color: '#D6D6D6',
    fontSize: 20
  }
});