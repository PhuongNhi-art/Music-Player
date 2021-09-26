import { StyleSheet } from "react-native";
import Fonts from "../../constants/Font";
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1A0938',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: 80,
      height: 80,
    },
    title: {
      marginTop: 20,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ED1BA3',
      // fontFamily: Fonts.type.black,
      // fontFamily: Fonts.type.black,
      // fontFamily:  Fonts.type.black,
    },
    text: {
      fontSize: 14,
      color: '#E7E7E7',
      marginHorizontal: 51,
      textAlign: 'center',
      marginTop: 8,
      
      // fontFamily: require('../assets//fonts/Montserrat-Medium.ttf'),
    },
    buttonRegister: {
      backgroundColor: '#361E60',
      borderRadius: 50,
      height: 70,
      width: 315,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textRegister: {
      color: '#E7E7E7',
      margin: 10,
      fontWeight: 'bold',
      fontSize: 20,
    },
    textLogin: {
      marginTop: 10,
      fontWeight: 'bold',
      fontSize: 20,
      color: '#ED1BA3'
    }
  
  });
export default styles;