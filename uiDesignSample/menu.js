import React, { Component } from 'react'
import { View, Text, Modal, Image,TouchableOpacity } from 'react-native'
import { logo } from './assets'

const colors = {
    "pink": "pink",
    "white":"white",
    "purple":"purple"
}
export default class MyMenu extends Component {
    render() {
        const { showMenu, hideMenu } = this.props
        return (
            <Modal
                animationType="visible"
                transparent={true}
                visible={showMenu}
                onRequestClose={hideMenu}>

                <View style={{ width: '60%', height: '100%', justifyContent: "flex-start", backgroundColor: colors.pink }}>
                    <Image source={logo} style={{ width: `45%`, height: 70, marginTop: 40, alignSelf: 'center' }}></Image>

                    <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 60, width: "100%" }}>
                        <Text style={{ color: colors.purple, fontSize: 28, fontWeight: "bold" }}>Home  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 60, width: "100%" }}>
                        <Text style={{ color: colors.purple, fontSize: 28, fontWeight: "bold" }}>Search  </Text>
                    </TouchableOpacity>
                </View>

            </Modal>
        )
    }
}
