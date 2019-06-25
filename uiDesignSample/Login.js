import React, { Component } from 'react'
import Layout from './layout';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import MyTextInput from './MyTextInput';
import { CustomTochable } from './customTochable';
import { facebook, twitter } from './assets';

const colors = {
    "orange": "#ff7745",
    "pink": "#f5326f",
    "white": "#fff"
}
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    render() {
        // const { mode } = this.props.navigation.state.params
        return (
            <Layout>
                <View style={{ justifyContent: "center", width: '85%', alignItems: "center" }}>
                    <Text style={{ color: colors.white, marginTop: 20, fontSize: 24, alignContent: "center" }}>{"SIGN IN "}
                        {/* { this.mode} */}
                    </Text>
                </View>
                <View style={{ justifyContent: "center", width: '85%', alignItems: "center" }}>
                    <MyTextInput onChangeText={(e) => this.setState({ email: e })} placeholder={"Enter Email"}></MyTextInput>
                    <MyTextInput onChangeText={(e) => this.setState({ password: e })} placeholder={"Password"} secureTextEntry={true}></MyTextInput>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 55, width: "60%", alignItems: "center", flexDirection: "row", borderRadius: 60 / 2, marginTop: 40 }}>
                        <Text style={{ color: colors.pink, fontSize: 20 }}>
                            {"GET STARTED"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>

                    <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 55, width: 55, alignItems: "center",
                     flexDirection: "row", borderRadius: 60 / 2, marginTop: 30  }}>
                    <Image source={facebook} style={{ width: 36, height: 36, resizeMode: "contain", tintColor: colors.pink }}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 55, width: 55, alignItems: "center",
                     flexDirection: "row", borderRadius: 60 / 2, marginTop: 30 , marginLeft: 40 }}>
                    <Image source={twitter} style={{ width: 36, height: 36, resizeMode: "contain", tintColor: colors.pink }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text  style={{ color: colors.white, marginTop: 20, fontSize: 18, alignContent: "center" }}>FORGOT PASSWORD</Text>
                </View>
            </Layout>
        )
    }
}
