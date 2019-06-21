import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { logo, facebook, twitter } from './assets';
import Icon from 'react-native-vector-icons/Ionicons';
import Layout from './layout';

const colors = {
    "orange": "#ff7745",
    "pink": "#f5326f",
    "white": "#fff"
}
function CustomTochable(props) {
    const {containerStyle, imageStyle, imageIcon, buttonText } = props
    return (
        <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 60, width: "85%", alignItems: "center",
         flexDirection: "row",borderRadius: 60 / 2 , ...containerStyle}} {...props}>
            {imageIcon &&
                <Image source={imageIcon} style={{ width: 36, height: 36, resizeMode: "contain", tintColor: colors.pink, ...imageStyle }}></Image>}
            {imageIcon &&
            <Text style={{ color: colors.pink, fontSize: 28, fontWeight: "bold" }}>| </Text>}
            <Text style={{ color: colors.pink, fontSize: 20 }}>
                {buttonText}
            </Text>
        </TouchableOpacity>

    );
}
export { CustomTochable } 