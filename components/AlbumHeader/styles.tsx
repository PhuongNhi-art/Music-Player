
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        // padding: 10,
        backgroundColor: '#9B89D8'
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
        justifyContent: 'center'
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 3,
    },
    name: {
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute', // child
        bottom: 0, // position where you want
        left: 0,
        fontSize: 24,
        padding: 10,
        textShadowColor: 'black', 
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 15, 
    },
    creator: {
        color: 'lightgray',
        marginHorizontal: 5,
        fontSize: 14,
    },
    like: {
        color: 'lightgray',
        marginHorizontal: 5,
        fontSize: 14,
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        padding: 5,
    }


});
export default styles;