import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SettingsScreen extends React.Component {


    render() {
        /* Go ahead and delete ExpoConfigView and replace it with your
         * content, we just wanted to give you a quick view of your config */
        return (
            <View style={styles.container}>
                <Text style={styles.h1Text}>Settings Page</Text>
            </View>

        )

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems:"center"
    },

    h1Text: {
        fontSize: 20,
        color: '#2e78b7',
    },
});
