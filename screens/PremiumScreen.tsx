
import * as React from 'react';
import { StatusBar, Text, View, StyleSheet, Button, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const PremiumScreen = () => {
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* <Ionicons name="arrow-back-outline" size={24} color="white" /> */}
      <View style={{ alignItems: 'center', flexDirection: 'column' }}>
        <Text style={styles.textTitle}>Free premium trial for 1 month</Text>
        <View style={{flexDirection: 'row',overflow: 'hidden', borderRadius: 10, height: 130, marginTop: 50}}>
            <View style={{backgroundColor: 'gray', padding: 10, flexDirection: 'column'}}>
              <Text style={{color: 'white', fontSize: 12, flex: 1}}>FREE</Text>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', flex: 2, alignItems: 'center', justifyContent: 'center'}}>Music with ads</Text>
            </View>
            <View style={{backgroundColor: 'green', padding: 10,flexDirection: 'column'}}>
              <Text style={{color: 'white', fontSize: 12, flex: 1}}>PREMIUM</Text>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', flex: 2, alignItems: 'center', justifyContent: 'center'}}>Ad-free music</Text>
            </View>
        </View>
        <TouchableHighlight style={styles.buttonPremium} onPress={()=>{}}
          >
            <Text style={styles.textPremium}>
              USE PREMIUM
            </Text>
          </TouchableHighlight>
          <Text style={{color: 'gray', fontSize: 14, textAlign: 'center', paddingTop: 20}}>Then only 59,000 VND/month. 
            Offer is only available to those who are new to the Premium plan. Terms apply</Text>
            <View style={{overflow: 'hidden', borderRadius: 10, backgroundColor: 'gray' ,height: 80, width: windowWidth-30, marginTop: 15}}>
              <View style={{flexDirection: 'row', padding: 20,}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', flex: 1}}>Free</Text>
                <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold', flex: 3, textAlign: 'right', paddingTop: 5}}>CURRENT PACKAGE</Text>
                </View>
            </View>
            <View style={{overflow: 'hidden', borderRadius: 10, backgroundColor: '#1A0938' ,height: 80, width: windowWidth-30, marginTop: 15}}>
              <View style={{flexDirection: 'row', padding: 20,}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', flex: 2}}>Premium</Text>
                <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold', flex: 3, textAlign: 'right', paddingTop: 5}}>ONLY 23,000 Đ</Text>
                </View>
            </View>
      </View>
      <View style={{height: 100}}></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    // alignItems: 'center'
  },
  textTitle: {
    paddingTop: 20,
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 250,
    

  },
  buttonPremium: {
    backgroundColor: 'white',
    borderRadius: 50,
    height: 60,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  textPremium: {
    color: 'black',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },

});
export default PremiumScreen;

