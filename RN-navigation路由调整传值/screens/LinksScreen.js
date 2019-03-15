import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

export default class LinksScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1Text}>List Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
      justifyContent: "center",
      alignItems:"center"
  },
    h1Text: {
        fontSize: 20,
        color: '#2e78b7',
    },
});
