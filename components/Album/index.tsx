import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';
import { Album } from '../../types';
import { useNavigation } from '@react-navigation/core';
import AlbumScreen from '../../screens/AlbumScreen';
import { StackNavigationProp } from '@react-navigation/stack';
export type AlbumProps = {
    album: Album

}

const AlbumItem = (props: AlbumProps) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const onPress = () => {
        navigation.navigate('AlbumScreen', {albumId: props.album._id })
      }
     
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: props.album.imageUri }} style={styles.image} />
                <Text style={styles.text}>{props.album.artistsHeadline} </Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
export default AlbumItem;
