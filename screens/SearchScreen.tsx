

import * as React from 'react';
import { StatusBar, Text, View, StyleSheet, ImageBackground, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FlatList, TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { withTheme } from 'react-native-elements';
import { useEffect, useState } from 'react';
import AppUrl from '../utils/AppUrl';
import { Toast } from 'native-base';
import Type from '../models/TypeModel';

// const type = [{ name: 'pop', image: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg' }, 
// { name: 'podd' ,image: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg'},
//  { name: 'podđ' ,image: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg'}, 
//  { name: 'popk' ,image: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg'}]
// const column1Data = type.filter((item, i) => i % 2 === 0);
// const column2Data = type.filter((item, i) => i % 2 === 1);
const SearchScreen = () => {
  const [dataTypes, setDataTypes] = useState();
  const getListTypes = async() => {
    try {
      
      const response = await fetch(AppUrl.getAllTypes, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      
      const json = await response.json();
      if (response.status==200){
       
        setDataTypes(json['message']);
        // console.log('data',dataCategories);
        console.log('loading type successful');
        // navigation.navigate('HomeScreen');
      }
      else {
        Toast.show(json['message']);
        console.log('loading type failed');
      }
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getListTypes();
    return ()=>{

    }
  },[])
  return (

    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Search</Text>
      <View>
        <View style={styles.search}>
          <AntDesign name="search1" size={24} color="#A7A7A7" style={styles.icon} />
          <TextInput placeholder='Song or artist'
            placeholderTextColor='#A7A7A7' style={styles.placeholder} />
        </View>
        <Text style={{ color: 'white', fontSize: 16, padding: 10, margin: 10, fontWeight: 'bold' }}>
          Type hear most</Text>
          <View style={{paddingLeft: 5}}>
            <ImageBackground source={{ uri: 'https://www.dropbox.com/s/adi7bi9n8s8d6i5/kpop.jpg?dl=1'}} style={styles.imageItem}
            imageStyle={{ borderRadius: 6}}>
                    <Text style={styles.nameItem} >
                        K-Pop
                    </Text>
                </ImageBackground>
                </View>
        <Text style={{ color: 'white', fontSize: 16, padding: 10, margin: 10, 
        fontWeight: 'bold' }}>
          Search all</Text>
          <FlatList
          style={{paddingLeft: 5}}
          numColumns={2}
          data={dataTypes}
          renderItem={({ item }) => (
            <View >
            <ImageBackground source={{ uri: item.imageUri}} style={styles.imageItem}
            imageStyle={{ borderRadius: 6}} blurRadius={1}>
                    <Text style={styles.nameItem} >
                        {item.name}
                    </Text>
                </ImageBackground></View>
          )}
        />
        

        <View></View>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 15,
  },
  search: {
    width: 327,
    height: 52,
    borderRadius: 30,
    backgroundColor: 'white',
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
  imageItem: {
    width: 150,
    height: 80,
    margin: 10,
    
    justifyContent: 'center'
},

nameItem: {
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute', // child
    bottom: 0, // position where you want
    left: 0,
    fontSize: 16,
    padding: 10,
    textShadowColor: 'black', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 15, 
},

});
export default SearchScreen;

