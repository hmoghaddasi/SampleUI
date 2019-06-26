import React, { Component } from 'react'
import {View, Modal, Text} from 'react-native'

const colors = {
    "white": "white",
    "pink": "pink"
}

export default class MyModal extends Component {
    render() {
        const { showModal, hideModal } = this.props
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={hideModal}>

           <View style={{
            width: '60%', height: '40%', justifyContent: "center", alignItems: "center", backgroundColor: colors.pink, borderRadius: 20 / 2,
            borderColor: colors.gray, shadowColor: colors.gray, shadowOffset: { width: 2, height: 2 }, shadowOpacity: 2,
            shadowRadius: 2, elevation: 2, 
              }}>
            <Text>This is modal</Text>
           </View>
           
           </Modal>
        )
    }
}
