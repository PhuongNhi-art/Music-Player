import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 72,
        height: 72,
    },
    image: {
        width: 40,
        height: 40,
        position: 'relative',
        zIndex: 1
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end'
    },
    circle: {
        position: 'absolute',
        opacity: 0.5,
        width: 66,
        height: 65,
        borderRadius: 65/2,

    }

});
export default styles;