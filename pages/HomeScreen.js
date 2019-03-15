import React from 'react';
import { Button, View, Text } from 'react-native';

export  default  class  HomeScreen extends  React.Component{
    static navigationOptions = {
        title: '云邻智联',
    };

    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Home Screen</Text>

                <Button
                    title="详情页面(带参数)"
                    onPress={()=>{this.props.navigation.navigate('Details',{
                        itemId:86,
                        otherParam: 'anything you want here',
                    })}}
                />

                <Button
                title="详情页面"
                onPress={()=>{this.props.navigation.navigate('Details')}}
                />


            </View>
        )
    }
}

