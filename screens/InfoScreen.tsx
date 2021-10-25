import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import StorageUtils from "../utils/StorageUtils";
import AsyncStorage from '@react-native-async-storage/async-storage';
const InfoScreen = () => {
    const [username, setUsername] = useState<string|null>();
    const [email, setEmail] = useState<string|null>();
    const navigation = useNavigation();
    const signOut = async () => {
        await StorageUtils.saveData(StorageUtils.USER_USERNAME,'');
        await StorageUtils.saveData(StorageUtils.USER_EMAIL,'');
        await StorageUtils.saveData(StorageUtils.USER_ID,'');
        navigation.navigate('SplashScreen');
    }
    const getUser = async ()=>{
        // console.log('getusser')
        const email_value = await StorageUtils.getData(StorageUtils.USER_EMAIL);
        // console.log(email_value);
        const username_value=await StorageUtils.getData(StorageUtils.USER_USERNAME);
        setUsername(username_value)
        setEmail(email_value)
        
    }
    useEffect(()=>{
        getUser();
        
        return ()=>{

        }
      },[])
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textFree}>Account Free</Text>
                <TouchableHighlight style={styles.buttonPremium}>
                    <Text style={styles.textPremium}>Sign up for a free trial</Text>
                </TouchableHighlight></View>
            <View style={{ margin: 10, marginLeft: 15, flexDirection: 'row' }}>
                <Ionicons name="person-circle-outline" size={50} color="white" style={{ flex: 1 }} />
                <View style={{flex: 4,paddingTop: 5 }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{username}</Text>
                <Text style={{fontSize: 14, color: 'gray'}}>Profile</Text>
                </View>
               
            </View>
            <View style={{ margin: 10, marginLeft: 15 }}>

                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'left' }}>
                    Email</Text>
                <Text style={{ color: 'gray', fontSize: 14 }}>{email} </Text>
            </View>
            <View style={{ margin: 10, marginLeft: 15 }}>
                
                    <Text style={{ color: '#C0C0C0', fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>
                        Introduction</Text>
               
            </View>
            <View style={{ margin: 10, marginLeft: 15 }}>
                
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'left' }}>
                        Version</Text>
                    <Text style={{ color: 'gray', fontSize: 14 }}>V1.2021</Text>
            </View>
            <View style={{ margin: 10, marginLeft: 15 }}>
                
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'left' }}>
                    Terms and condition</Text>
                    <Text style={{ color: 'gray', fontSize: 14 }}>All you need to know</Text>
            </View>
            <View style={{ margin: 10, marginLeft: 15 }}>
                
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'left' }}>
                    Privacy policy</Text>
                    <Text style={{ color: 'gray', fontSize: 14 }}>Important to both you and us</Text>
            </View>
            <View style={{ margin: 10, marginLeft: 15 }}>
                
                    <Text style={{ color: '#C0C0C0', fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}>
                        Different</Text>
               
            </View>
            <View style={{ margin: 10, marginLeft: 15 }}>
                <TouchableHighlight onPress={signOut}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'left' }}>
                        Sign out</Text></TouchableHighlight>
                <Text style={{ color: 'gray', fontSize: 14 }}>You log in as {username}  </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,


    },
    textFree: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    buttonPremium: {
        backgroundColor: 'white',
        borderRadius: 50,
        height: 60,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,

    },
    textPremium: {
        color: 'black',
        margin: 10,
        fontWeight: 'bold',
        fontSize: 18,
    },
});
export default InfoScreen;