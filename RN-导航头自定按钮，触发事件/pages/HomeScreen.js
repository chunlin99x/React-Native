import React from 'react';
import { Button, View, Text ,Image,Platform} from 'react-native';

export  default  class  HomeScreen extends  React.Component{
    static navigationOptions = ({ navigation }) =>{return{
        //title: '云邻智联',
        headerTitle:(
            <Image
                source={require('../public/spiro.png')}
                style={{ width: 30, height: 30 }}
            />
        ),
        headerRight:(
            <Button
                onPress={navigation.getParam('increaseCount')}
                title="+1"
                color={Platform.OS === 'ios' ? '#fff' : null}
            />
        ),
        // 单独设置Home的样式
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }};
    componentWillMount() {
        // 可以设置成一个函数
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0,
    };
    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Home Screen</Text>
                <Text>Count: {this.state.count}</Text>

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

