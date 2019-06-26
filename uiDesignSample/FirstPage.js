import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { logo, facebook, twitter } from './assets';
import Icon from 'react-native-vector-icons/Ionicons';
import Layout from './layout';
import { CustomTochable } from './customTochable';

const colors = {
    "orange": "#ff7745",
    "pink": "#f5326f",
    "white": "#fff"
}
export default class FirstPage extends Component {
    constructor(){
        super();
        this.onSignUpPress=this.onSignUpPress.bind(this);
    }
    onSignUpPress() {
        const { navigation } = this.props
        navigation.navigate("SecondPage",{id: "5"})
    }
    onSignInPress(page) {
      const { navigation } = this.props
      navigation.navigate("LoginPage",{mode: page})
  }
    
    render() {
        return (
            // <View style={{ width: '100%', height: '100%', alignItems:"center" }}>
            //   <LinearGradient colors={[colors.orange, colors.pink]} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
            //   <Image source={logo} style={{width: `45%`, height: 70,  marginTop: 40}}/>
            //   <View style={{flexDirection: "row", width: '45%'}}>
            //     <Text style={{fontSize: 35, color: colors.pink}}>{"CONN"}</Text>
            //     <Text style={{fontSize: 35, color: colors.white}}>{"EXION"}</Text>
            //   </View>
            //   <Text style={{fontSize: 16, color: colors.white, textAlign: "center", width: '55%'}}>{"Find and meet person around you to frodLOVE"}</Text>
            <Layout pinkTitle="CONN" whiteTitle="EXION">
                <CustomTochable buttonText=" Sign in with Facebook" imageIcon={facebook} onPress={(e)=>this.onSignInPress('fb')} imageStyle={{ width: 30 }} containerStyle={{ marginTop: 100 }}></CustomTochable>
                <CustomTochable buttonText=" Sign in with Twitter" imageIcon={twitter} onPress={(e)=>this.onSignInPress('tw')} containerStyle={{ marginTop: 20 }}></CustomTochable>
                <CustomTochable buttonText=" Sign up" containerStyle={{ marginTop: 20 }} onPress={this.onSignUpPress}></CustomTochable>
                {/* <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 60, width: "85%", alignItems: "center", flexDirection: "row", borderRadius: 60 / 2, marginTop: 100 }}>
          <Image source={facebook} style={{ width: 30, height: 36, resizeMode: "contain", tintColor: colors.pink }}></Image>
          <Text style={{ color: colors.pink, fontSize: 28, fontWeight: "bold" }}>| </Text>
          <Text style={{ color: colors.pink, fontSize: 20 }}>
            {" Sign in with Facebook"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 60, width: "85%", alignItems: "center", flexDirection: "row", borderRadius: 60 / 2, marginTop: 20 }}>
          <Image source={twitter} style={{ width: 36, height: 36, resizeMode: "contain", tintColor: colors.pink }}></Image>
          <Text style={{ color: colors.pink, fontSize: 28, fontWeight: "bold" }}> | </Text>
          <Text style={{ color: colors.pink, fontSize: 20 }}>
            {" Sign in with Twitter"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: colors.white, justifyContent: "center", height: 60, width: "85%", alignItems: "center", flexDirection: "row", borderRadius: 60 / 2, marginTop: 20 }}>

          <Text style={{ color: colors.pink, fontSize: 20 }}>
            {" Sign Up"}
          </Text>
        </TouchableOpacity> */}
            </Layout>
            // </View>
        );
    }
}
