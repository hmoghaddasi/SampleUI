import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import LayoutEx from './layoutEx';
import { search } from './assets';
import MyModal from './MyModal';
import { colors } from './colors';
import { connect } from 'react-redux';
import { setInputNumber, addInputNumber } from './src/redux/action';
import { addInputArray, clearInput } from './src/redux/action/commonActions';

class ThirdExercise extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchModal: false,
            searchResult: '',
            inputValue:0
        };
        this.setShowModal = this.setShowModal.bind(this)
    }
    setShowModal(status) {
        // alert(status)
        this.setState({ showSearchModal: status });
    }
    getSearchResult(value) {
        // this.setState({ searchResult: value });
    }
    render() {
        const { showSearchModal, searchResult, inputValue } = this.state
        const { navigation, searchValue,inputNumber, setInputNumber, addInputNumber,addInputArray,clearInput } = this.props
        const params = this.props.navigation.state.params
        // const { name } = navigation.state.params
        // console.log(name ,"============= name third exersize")
        const title = params ? params.name : "Welcome"
        return (
            <LayoutEx navigation={navigation} name={title}>
                <MyModal showModal={showSearchModal} onRequestClose={() => this.setShowModal(false)} searchResult={(e) => this.getSearchResult(e)}></MyModal>
                {(searchValue!='') &&
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: colors.purple, alignSelf: 'center', fontSize: 24 }}>
                    {"You Search about: "+ searchValue}
                    </Text>
                </View>
                }
                <View>
                    <TextInput style={{width:'100%', height:40, borderColor:colors.white, borderWidth:2}}
                    keyboardType="number-pad"
                     onChangeText={(e)=>{this.setState({inputValue:e})}
                    //  setInputNumber(e)
                     }/>
                    <Text style={{fontSize:24}}>{inputNumber}</Text>
                    <TouchableOpacity style={{width:'30%', height:25}} onPress={()=>addInputNumber(inputValue)}>
                    <Text>{"Add"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'30%', height:25}} onPress={()=>addInputArray(inputValue)}>
                    <Text>{"Array"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'30%', height:25}} onPress={()=>clearInput()}>
                    <Text>{"Clear"}</Text>
                    </TouchableOpacity>
                </View>
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

const MapState = (store) => ({
    searchValue: store.searchValue,
    inputNumber: store.inputNumber

})

export default connect(MapState,{
    setInputNumber,addInputNumber, addInputArray,clearInput
})(ThirdExercise);
