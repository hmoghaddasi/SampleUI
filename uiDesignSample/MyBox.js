import React, { Component } from 'react'
import { TouchableOpacity, Image, Text } from 'react-native';

const colors = {
    "white": "white",
    "gray": "gray"
}

export default class MyBox extends Component {
    render() {
        const { image, text } = this.props
        return (
            <TouchableOpacity style={{
                width: 110, height: 110, justifyContent: "center", alignItems: "center", backgroundColor: colors.white, borderRadius: 25 / 2,
                borderColor: colors.gray, shadowColor: colors.gray, shadowOffset: { width: 5, height: 5 }, shadowOpacity: 2,
                shadowRadius: 5, elevation: 5,
            }}>
                <Image source={image} style={{ width: 50, height: 50, marginTop: 10, resizeMode: 'stretch' }}></Image>
                <Text style={{ fontSize: 14 }}>{text}</Text>
            </TouchableOpacity>
        )
    }
}
