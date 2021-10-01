import React from "react";
import { View, Image, Text } from "react-native";
import Song from "../../models/SongModel";
import styles from "./styles";
import { Feather } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
export type SongListItemProps = {
    song: Song
}
const SongListItem = (props: SongListItemProps) => {
    const navigation = useNavigation();
    // console.log(props);
    const { song } = props;
    const onPress = () => {
        navigation.navigate("PlayerScreen",  {song: song._id });
    }
    return (
    
        <View style={styles.container}>
            
            <Image source={{ uri: song.imageUri }} style={styles.image} />
           <View style={styles.rightContainer}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.title}>{props.song.name}</Text>
                    </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                <View style={styles.lyrics}>
                       <Text style={{fontSize: 9}}>LYRICS</Text>
                    </View>
                    <Text style={styles.artist}>{song.artists}</Text>
                   
                    </View>
            </View>
            <View style={{paddingTop: 5}}>
            <Feather name="more-vertical" size={24} color="white" />
            </View>

        </View>
    )
}
export default SongListItem;