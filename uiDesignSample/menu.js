import React, { Component } from 'react'
import { View, Text, Modal, Image,TouchableOpacity } from 'react-native'
import { logo } from './assets'


const colors = {
    "pink": "pink",
    "white":"white",
    "purple":"purple"
}
export default class MyMenu extends Component {
    constructor(props){
        super(props)
        this.navigateTo=this.navigateTo.bind(this)
    }
    navigateTo(page){
        
        const { params } = this.props
        console.log(params,"================params in function")
        
        params.navigation.closeDrawer()
        params.navigation.navigate(page, {"name": page})
    }
    render() {
        const { params } = this.props
        console.log(params)
        // const {closeDrawer, openDrawer} = params
        return (
      
                <View style={{ width: '100%', height: '100%', justifyContent: "flex-start", backgroundColor: colors.pink }}>
                    <Image source={logo} style={{ width: `45%`, height: 70, marginTop: 40, alignSelf: 'center' }}></Image>

                    <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 60, width: "100%" }}
                    onPress={()=>{this.navigateTo('Home')}}
                    >
                        <Text style={{ color: colors.purple, fontSize: 28, fontWeight: "bold" }}>Home  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 60, width: "100%" }}
                    onPress={()=>{this.navigateTo('Search')}}
                    >
                        <Text style={{ color: colors.purple, fontSize: 28, fontWeight: "bold" }}>Search  </Text>
                    </TouchableOpacity>
                </View>

        )
    }
}
