import React, { useEffect, useState } from "react";
import { View, Text, Image, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Song from "../../models/SongModel";
import { Album } from "../../types";
import styles from "./styles";
import { Audio } from 'expo-av';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Sound } from "expo-av/build/Audio";
// export type PlayerWidgetProps = {
//     song: Song
// }
const song =
{
    id: '3',
    uri: '',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
    title: 'Hight on you',
    artist: 'Helen'
}
const PlayerWidget = () => {
    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);
    const onPlayBackStatusUpdate = (status: any) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setDuration(status.positionMillis);
    }
    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync()
        }
        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav' },
            { shouldPlay: isPlaying },
            onPlayBackStatusUpdate
        )
        setSound(newSound)
    }
    useEffect(() => {
        playCurrentSong();

    }, [])
    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.stopAsync;
        }
        else {
            await sound.playAsync;
        }
    }
    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }
        return position / duration;
    }
    return (
        <View style={styles.container}>
            
            <View style={styles.row}>

                <Image source={{ uri: song.imageUri }} style={styles.image} />

                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>

                    </View>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={20} color={'white'} />
                        </TouchableOpacity>

                    </View>
                </View>
                </View>

                <View style={[styles.progress, {width: `${getProgress}%`}]}/>
        </View>
        // <View style={styles.container}>
        //     <Image source={{ uri: song.imageUri }} style={styles.image} />
        //     <View style={styles.rightContainer}>
        //     <View style={styles.nameContainer}>
        //         <Text style={styles.title}>{song.title}</Text>
        //         <Text style={styles.artist}>{song.artist}</Text>

        //     </View>
        //     <View style={styles.iconsContainer}>
        //         <TouchableOpacity onPress={onPlayPausePress}>
        //             <FontAwesome name={isPlaying? 'pause': 'play'} size={20} color={'white'} />
        //         </TouchableOpacity>

        //     </View></View>
        // </View>
    );
}
export default PlayerWidget;