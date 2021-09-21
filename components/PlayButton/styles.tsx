import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    image: {
        width: 30,
        height: 30,
        position: 'relative',
        zIndex: 1
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end'
    },
    circle: {
        position: 'absolute',
        opacity: 0.5,
        width: 45,
        height: 45,
        borderRadius: 50,

    }

});
export default styles;