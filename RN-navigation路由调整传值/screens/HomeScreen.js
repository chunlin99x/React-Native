import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1Text}>
          Home Page
        </Text>

      </View>
    );
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
