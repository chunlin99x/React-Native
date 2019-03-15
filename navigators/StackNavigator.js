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

// 路由的切换只要保持在堆栈中  componentWillUnMount就不会调用


export default createAppContainer(AppStack)
