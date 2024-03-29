import React, { Component } from 'react'
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MyHeader from './MyHeader';

const colors = {
    "purple": "purple",
    "white": "#fff",
    "blue":"blue"
}
export default class LayoutEx extends Component {
    render() {
        const {navigation, name} = this.props
        console.log(name ,"============= name layout")
        return (
            <View style={{ width: '100%', height: '100%' }}>
            <LinearGradient colors={[colors.white, colors.purple]} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
            <MyHeader onMenuItemPress={navigation.openDrawer} name={name}></MyHeader>
            {this.props.children}
                     
            </View>
        )
    }
}
