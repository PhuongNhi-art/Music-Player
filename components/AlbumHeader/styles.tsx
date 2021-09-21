
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
    }, 
    image : {
        width: 200,
        height: 200,
        margin: 15,
    },
    creatorContainer: {
       flexDirection: 'row',
        margin: 3,
    },
    name: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    },
    creator: {
        color: 'lightgray',
        margin: 5,
        fontSize: 14,
    },
    like: {
        color: 'lightgray',
        margin: 5,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    }


});
export default styles;