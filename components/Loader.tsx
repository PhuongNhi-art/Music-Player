import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import { Spinner } from 'native-base';
const Loader = () => {
    return (
        <View style={styles.box}>
           <Spinner color="emerald.500" />
        </View>
    );
}
const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});
export default Loader;