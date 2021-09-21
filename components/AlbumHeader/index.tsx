import React from "react";
import { View, Text, Image, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Album } from "../../types"; 
import styles from "./styles";
export type AlbumHeaderProps = {
    album: Album,
}
const AlbumHeader = (props: AlbumHeaderProps) => {
    const {album} = props;
    return (
        <View style={styles.container}>
            <Image source={{uri: album.imageUri}} style={styles.image}/>
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={styles.like}>{album.numberOfLikes} Likes</Text>

            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style= {styles.buttonText}>PLAY</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default AlbumHeader;