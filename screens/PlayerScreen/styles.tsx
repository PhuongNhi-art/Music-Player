import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    headerSection: {
        marginHorizontal: 12,
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'

    },
    musicSection: {
        marginHorizontal: 0,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePlayer: {
        borderRadius: 250/2,
        height: 250,
        width: 250,
        marginHorizontal: 81,
        marginVertical: 20

    },
    containerTitle:{
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle:{
        fontSize: 24,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    textArtist: {
        fontSize: 14,
        color: '#A7A7A7',
        marginTop: 8,
        textAlign: 'center'
    },
    sliderSection:{
        marginHorizontal: 24,
        marginVertical: 0,
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"

    },
    time: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    textTime: {
        fontSize: 12,
        color: '#E7E7E7'
    },
    controlSection: {
        // marginHorizontal: 32,
        marginHorizontal: 24,
        marginVertical: 10,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    controlContainer: {
        width: 231,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        

    },
    controlMusic: {
        width: 231,
        height: 70,
        borderRadius: 54,
        flexDirection: 'row',
        backgroundColor: '#361E60',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    playButton: {
        width: 88,
        height: 88,
        borderRadius: 88/2,
        backgroundColor: '#1A0938',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lyricSection: {
        marginHorizontal: 0,
        marginVertical: 10,
        alignItems: 'center'
    },
    textLyrics: {
        fontSize: 14,
        color: '#22DDF2'
    }

});
export default styles;