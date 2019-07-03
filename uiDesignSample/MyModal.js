import React, { Component } from 'react'
import { View, Modal, TouchableOpacity, Text } from 'react-native'
import {colors} from './colors'
import { TextInput } from 'react-native-gesture-handler';
import { setSearchValue } from './src/redux/action';
import { connect } from 'react-redux';

class MyModal extends Component {
    constructor(props){
        super(props);
        this.onSearchPress=this.onSearchPress.bind(this)
        this.onCancelPress=this.onCancelPress.bind(this)
        this.state = {
            searchValue: ""
          }
    }
    onSearchPress() {
        const {searchValue} = this.state
        // alert(searchValue)
        this.props.searchResult(searchValue);
        this.props.onRequestClose();
    }
    onCancelPress() {
        this.props.onRequestClose();
    }
    render() {
        const { showModal, hideModal, searchResult, setSearchValue } = this.props
        const {searchValue} = this.state
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={hideModal}>
                <View style={{ width: '100%', height: '100%', justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <View style={{
                        width: '80%', height: '40%', justifyContent: "center", alignItems: "center", backgroundColor: colors.white,
                        borderRadius: 20 / 2,
                        borderColor: colors.gray, shadowColor: colors.gray, shadowOffset: { width: 2, height: 2 }, 
                        shadowOpacity: 2,
                        shadowRadius: 2, elevation: 2,
                    }}>
                        <TextInput 
                        onChangeText={
                            (e) => setSearchValue(e)
                            // this.setState({ searchValue: e })
                        } 
                        placeholder="Enter Some Text"
                        style={{borderBottomColor:colors.pink, borderBottomWidth:2, width:'80%'}}></TextInput>

                        < TouchableOpacity onPress={this.onSearchPress} style={{ backgroundColor: colors.white, justifyContent: "center", 
                        height: 40, width: "35%", alignItems: "center", flexDirection: "row", borderRadius: 60 / 2, marginTop: 15 }}
                        >
                            <Text style={{ color: colors.pink, fontSize: 20 }}>{"Search"}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.onCancelPress} style={{ backgroundColor: colors.white, justifyContent: "center", 
                        height: 40, width: "35%", alignItems: "center", flexDirection: "row", borderRadius: 60 / 2, marginTop: 15 }}>
                        <Text>{"Cancel"}</Text>
                         </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
}

const MapState = (store) => ({
    
})

export default connect(MapState,{
    setSearchValue
})(MyModal)
