import React from "react";
import {
    View, Text, Image,
    Touchable, ImageBackground
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Album } from "../../types";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";
export type AlbumHeaderProps = {
    album: Album,
}
const AlbumHeader = (props: AlbumHeaderProps) => {
    // console.log(props.album);
    const { album } = props;
    return (
        <View style={styles.container}>
            <LinearGradient style={{padding: 10}}
                colors={Colors.linearGradient3}
                start={{x:1, y:0}}
                end = {{x:1, y:1}}>
            <View style={{ alignItems: 'center' }}>
                <ImageBackground source={{ uri: album.imageUri }} style={styles.image}>
                    <Text style={styles.name} >
                        {album.name}
                    </Text>
                </ImageBackground>
                {/* <Text style={styles.name}>{album.name}</Text> */}
                </View>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.artistsHeadline}</Text>
                <Text style={styles.like}>{album.numberOfLikes} Likes</Text>

            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', flex: 3, padding: 10 }}>
                    <AntDesign name="hearto" size={24} color="lightgray" style={{ paddingRight: 10 }} />
                    <Feather name="more-vertical" size={24} color="lightgray" />
                </View>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <FontAwesome name="play" size={24} color="black" style={styles.buttonText} />
                    </View>
                </TouchableOpacity></View></LinearGradient>
        </View>
    );
}
export default AlbumHeader;