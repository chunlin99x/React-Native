import React from 'react';
import { Button, View, Text } from 'react-native';

export  default  class  HomeScreen extends  React.Component{

    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Home Screen</Text>
                <Button
                title="详情页面"
                onPress={()=>{this.props.navigation.navigate('Details')}}
                />


            </View>
        )
    }
}
