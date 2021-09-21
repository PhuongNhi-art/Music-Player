import { StyleSheet } from "react-native";
import Fonts from "../../constants/Font";
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1A0938',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    image: {
      width: 150,
      height: 150,
    },
    title: {
      
      fontSize: 24,
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
    }
  
  });
export default styles;