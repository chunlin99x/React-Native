import React from 'react';
import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';
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
        navigationOptions: {
            tabBarLabel: 'Home!', //  底部导航的显示文字
        },
        // 配置
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#62c3a4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
)

// 路由的切换只要保持在堆栈中  componentWillUnMount就不会调用
const Tabs = createBottomTabNavigator({AppStack})  // 底部导航

//export default createAppContainer(AppStack)
export default createAppContainer(Tabs)
