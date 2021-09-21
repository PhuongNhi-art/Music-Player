import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import { color } from 'react-native-reanimated';
import styles from './styles';
import { Album } from '../../types';
import { useNavigation } from '@react-navigation/core';
import Navigation from '../../navigation';
export type AlbumProps = {
    album: Album

}

const AlbumItem = (props: AlbumProps) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('AlbumScreen');
        // navigation.navigate('AlbumScreen');


    };
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

function id(arg0: string, id: any, album: Album) {
    throw new Error('Function not implemented.');
}
