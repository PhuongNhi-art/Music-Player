
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 10,
    },
    image: {
        width: 75,
        height: 75,
    },
    title: {
        color: 'white',
        fontSize: 18,
        // paddingLeft: 5,
        // paddingTop: 5

    },
    artist : {
        color: 'lightgray',
        fontSize: 14,
        // paddingLeft: 5,
        // paddingTop: 5
    }

});
export default styles;