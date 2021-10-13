
import { StyleSheet } from "react-native";
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
export default styles;