import React from 'react';
import { Button, View, Text } from 'react-native';

export  default  class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="再去详情页面"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}