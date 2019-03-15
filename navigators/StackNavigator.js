import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
//导入组件
import Details from "../pages/DetailsScreen"
import Home from "../pages/HomeScreen"

const AppStack = createStackNavigator(
    {
        Details: {
            screen: Details
        },
        Home: {
            screen: Home
        }
    },
    {
        // 其他的配置信息
        initialRouteName: 'Home',
    }
)


export default createAppContainer(AppStack)
