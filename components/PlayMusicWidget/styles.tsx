import { StyleSheet } from "react-native";
import  Colors  from "../../constants/Colors";
const styles = StyleSheet.create({
   container: {
       width: 321,
       height: 84,
       borderRadius: 84,
       backgroundColor: 'rgba(0,0,0,0)',
       justifyContent: 'space-between',
        alignItems: 'flex-start',

   },
   container1: {
    width: 42, 
    height: 84
   },
   container2: {
    height: 84,
    marginLeft: 28,
    justifyContent: 'space-between'
   },
//    container3: {

//    },
   container3: {
       width: 321-84+70,
       height: 70,
       borderRadius: 70,
       backgroundColor: '#361E60',
       position: 'absolute',
       top: 0,
       left: 0,
       marginVertical: 7,
       marginHorizontal: 7
   },
   containerGradient: {
       width: 321 - 84,
       height: 3,
       flexDirection: 'row',
       justifyContent: 'flex-start',
   }


});
export default styles;