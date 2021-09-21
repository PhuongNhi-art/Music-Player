
import { StyleSheet } from "react-native";
import  Colors  from "../../constants/Colors";
const styles = StyleSheet.create({
    container : {
        position: 'absolute',
        bottom: 45,
        backgroundColor: '#131313',
        flexDirection: 'column',
        margin: 5,
        paddingLeft: 5,
        paddingRight: 5,
        width: '98%',
        borderRadius: 8,
        borderColor: 'black',
        alignItems: 'center',
    },
    rightContainer: {
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        
        
    },
    row: {
        flexDirection: 'row'
    },
    progress: {
        height: 2,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        
        
        backgroundColor: '#bcbcbc'
    },
    nameContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        padding: 3,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 70,
        justifyContent: 'space-around'
    },
    image: {
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        width: 50,
        height: 50,
        
    },
    title:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 5
        
    },
    artist: {
        color: 'lightgray',
        fontSize: 13,
        paddingLeft: 5
        
    },


});
export default styles;