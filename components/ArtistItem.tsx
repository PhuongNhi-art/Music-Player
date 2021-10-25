import React from "react";
import { View, Image, Text , TouchableOpacity, StyleSheet} from "react-native";
import { Feather } from '@expo/vector-icons'; 
import Artist from "../models/ArtistModel";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export type ArtistProps = {
    artist: Artist

}
const ArtistItem = (props: ArtistProps)=>{
    // Artist {artist} = props;
    // console.log('artist', props.artist )
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
    
        <View style={styles.container}>
            
            <Image source={{uri: props.artist.imageUri}} style={styles.image} />
           <View style={styles.rightContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('ArtistScreen', {idArtist: props.artist._id})}>
                    <Text style={styles.title}>{props.artist.name}</Text>
                    </TouchableOpacity>
            </View>
            <View style={{paddingTop: 5}}>
            <Feather name="more-vertical" size={24} color="white" />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 10,
        flex: 3,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50/2
    },
    title: {
        color: 'white',
        fontSize: 18,
        // paddingLeft: 5,
        // paddingTop: 5

    },

    artist : {
        color: 'lightgray',
        fontSize: 13,
        // paddingLeft: 5,
        // paddingTop: 5
    },
    lyrics: {
        backgroundColor: 'gray',
        height: 20,
        width: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    }
});
export default ArtistItem;