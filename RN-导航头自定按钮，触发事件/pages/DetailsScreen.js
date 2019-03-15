import React from 'react';
import { Button, View, Text,Image } from 'react-native';

export  default  class DetailsScreen extends React.Component {
    /*
    * static navigationOptions ={
        title: 'Details',
    }
    */
    // 在标题位置显示路由参数
    // 结构赋值
    static navigationOptions =({navigation})=>{
        return  {
            //title: navigation.getParam('otherParam', 'A Nested Details Screen'),
            // 使用自定义组件替换标题
            headerTitle:()=>{
                return (
                    <Image
                        source={require('../public/spiro.png')}
                        style={{ width: 30, height: 30 }}
                    />
                );
            },
            // 标题栏交互最常见的方式是点击标题左侧或右侧的按钮
            headerRight:(
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#fff"
                />
            )
        }

        ;

    }



    render() {
        // 从 navigation 获取到路由的参数
        const  {navigation} = this.props
        const itemId = navigation.getParam('itemId', 'NO-ID')
        const otherParam = navigation.getParam('otherParam', 'some default value');
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>



                {/*navigate  在同一个路由上页面是无法跳转的*/}
                <Button
                    title="再去详情页面"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                {/* push  尽管还是在同一个路由上，还是可以跳转的*/}
                <Button
                    title="Go to Home"
                    onPress={()=>{this.props.navigation.push("Details")}}

                />
                {/*goback 回到上一个页面*/}
                <Button title="返回" onPress={()=>{this.props.navigation.goBack()}}/>


                <Button title="push 参数 detail" onPress={()=>{
                    this.props.navigation.push("Details",{
                        itemId: Math.floor(Math.random() * 100),
                    })
                }} />

                {/* 改变路由参数*/}
                <Button
                    title="setParams参数"
                    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
                />





            </View>
        );
    }
}