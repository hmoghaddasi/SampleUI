import React, { Component } from 'react'
import{Text, TouchableOpacity, View, Image} from 'react-native';
import LayoutEx from './layoutEx';
import { search } from './assets';
import MyModal from './MyModal'
const colors = {
    "white": "#fff",
    "purple":"purple"
}

export default class ThirdExercise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchModal: false,
        };
        this.setShowModal = this.setShowModal.bind(this)
    }
    setShowModal(status) {
        // alert(status)
        this.setState({ showSearchModal: status });
      }
    render() {
        const { showSearchModal } = this.state
        return (
           <LayoutEx>
                <MyModal showModal={showSearchModal} hideModal={() => this.setShowModal(false)}></MyModal>
                
                <View style={{justifyContent: 'flex-end', alignItems:'flex-end', alignSelf:'flex-end', flexDirection:'column'}}>
                 <TouchableOpacity onPress={() => this.setShowModal(true)} style={{ backgroundColor: colors.white, justifyContent: "center", alignItems:'center',
                 height: 50, width: 50, alignItems: "flex-end", flexDirection: "row", borderRadius: 30 / 2}}>
                       <Image source={search} style={{ width: 50, height: 50, resizeMode: "contain", tintColor: colors.purple }}></Image>  
                </TouchableOpacity>
                </View>
                
           </LayoutEx>
        )
    }
}
