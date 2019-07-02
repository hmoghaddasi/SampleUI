import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import LayoutEx from './layoutEx';
import { search } from './assets';
import MyModal from './MyModal'
import { colors } from './colors'

export default class ThirdExercise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchModal: false,
            searchResult: ''
        };
        this.setShowModal = this.setShowModal.bind(this)
    }
    setShowModal(status) {
        // alert(status)
        this.setState({ showSearchModal: status });
    }
    getSearchResult(value) {
        this.setState({ searchResult: value });
    }
    render() {
        const { showSearchModal, searchResult } = this.state
        const { navigation } = this.props
        const params = this.props.navigation.state.params
        // const { name } = navigation.state.params
        // console.log(name ,"============= name third exersize")
        const title = params ? params.name : "Welcome"
        return (
            <LayoutEx navigation={navigation} name={title}>
                <MyModal showModal={showSearchModal} onRequestClose={() => this.setShowModal(false)} searchResult={(e) => this.getSearchResult(e)}></MyModal>
                {(searchResult!='') &&
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: colors.purple, alignSelf: 'center', fontSize: 24 }}>
                    {"You Search about: "+ searchResult}
                    </Text>
                </View>
                }
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end', flexDirection: 'column', position: 'absolute', bottom: 10, right: 10 }}>
                    {title == 'Search' &&
                        < TouchableOpacity onPress={() => this.setShowModal(true)} style={{
                            backgroundColor: colors.white, justifyContent: "center", alignItems: 'center',
                            height: 50, width: 50, alignItems: "flex-end", flexDirection: "row", borderRadius: 30 / 2
                        }}>
                            <Image source={search} style={{ width: 50, height: 50, resizeMode: "contain", tintColor: colors.purple }}></Image>
                        </TouchableOpacity>
                    }
                </View>

            </LayoutEx>
        )
    }
}
