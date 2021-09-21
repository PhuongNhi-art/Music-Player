import * as React from 'react';
import {
   StyleSheet, 
   Text,
   View,
   } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import AlbumItem from '../components/Album/index';
import AlbumCategoryItem from '../components/AlbumCategory/index';
import albumCategory from '../data/albumCategory';
import { FlatList } from 'react-native-gesture-handler';
import { isEmptyStatement, isTemplateElement } from '@babel/types';
const album = {
  id : '1',
  imageUri: 'https://yt3.ggpht.com/uiwv2J3oxLr2v13MUkX-5M2-dHk8nDoeMr_rMUP2siYjfjTkDl__wcOit0v2oPQeXFPdvnvaics=s900-c-k-c0x00ffffff-no-rj',
  artistsHeadline: 'Taylor Swift, Cardi Objective C, Avicii'
}


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
        {/* <AlbumItem album = {album}/> */}
      <FlatList 
      data={albumCategory}
      renderItem={({item})=> <AlbumCategoryItem title={item.title} albums={item.albums}/>}
      keyExtractor={(item)=>item.id}/>
    </View>
  );
}

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
