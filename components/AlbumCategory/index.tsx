import React from  'react';
import {View, Image, Text, FlatList} from 'react-native';
import {Album, AlbumCategory} from '../../types';
import AlbumItem from '../Album';
import styles from './styles';
export type AlbumCategoryProps = AlbumCategory;
const AlbumCategoryItem = (props: AlbumCategoryProps)=>(
    <View style={styles.container}>
        <Text style = {styles.title}>{props.title}</Text>
        <FlatList 
            data={props.albums}
            renderItem={({item}) =><AlbumItem album={item}/>}
            keyExtractor = {(item)=>item._id}
            showsHorizontalScrollIndicator={false}
            horizontal/>
        
    </View>
);
export default AlbumCategoryItem;
