import React from 'react';
import { Button, View, Text } from 'react-native';
import StackNavigator  from "./navigators/StackNavigator"
export default class App extends React.Component {
    render() {
        return <StackNavigator />;
    }
}