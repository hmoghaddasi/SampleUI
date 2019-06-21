import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
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

export default class SecoundPage extends Component {
  constructor(props) {
    super(props);
    this.onSavePress = this.onSavePress.bind(this)
    this.onCancelPress = this.onCancelPress.bind(this)
    this.state = {
      fullName: "",
      pass1: "",
      pass2: ""
    }

  }

  componentWillMount() {
    const {id} = this.props.navigation.state.params

    alert(id+"====================this is just a test")
  }

  onCancelPress() {
    this.setState({
      fullName: '',
      pass1: "",
      pass2: ""
    });
    // this.setState({pass1:''});
    // this.setState({pass2:''});

  }

  onSavePress() {
    const {pass1, pass2, fullName: fName} = this.state
    if (pass1 == pass2 && pass1.length!=0) {
      alert(fName + " welcome!")
    } else {
      alert("password not matched!")
    }
  }

  render() {
    return (
      <Layout pinkTitle="SA" whiteTitle="AP" mahdieh="1" secondPage={true}>
        <View style={{ justifyContent: "center", width: '85%' }}>
          <Text  style={{ color: colors.white, marginTop: 20, fontSize: 24, alignContent: "center" }}>{"CREATE YOUR LOGIN"}</Text>
          <TextInput placeholderTextColor={colors.white}
          onChangeText={
            (e) => this.setState({
               fullName: e 
              }, 
              // ()=>this.callCity()
              )
          } placeholder={"Jamia Norwith"} style={{
            fontSize: 20, color: colors.white, width: '95%',
            height: 40, textAlign: "left", marginTop: 20, borderBottomColor: colors.white, borderBottomWidth: 1
          }} />
          <TextInput onChangeText={(e) => this.setState({ pass1: e })} placeholder={"Password"} placeholderTextColor={colors.white} secureTextEntry={true} style={{
            fontSize: 20, color: colors.white, width: '95%',
            height: 40, textAlign: "left", marginTop: 20, borderBottomColor: colors.white, borderBottomWidth: 1
          }} />
          <TextInput onChangeText={(e) => this.setState({ pass2: e })} placeholder={"Re-Enter Password"} secureTextEntry={true} placeholderTextColor={colors.white} style={{
            fontSize: 20, color: colors.white, width: '95%',
            height: 40, textAlign: "left", marginTop: 20, borderBottomColor: colors.white, borderBottomWidth: 1
          }} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={this.onCancelPress} style={{ backgroundColor: 'transparent', justifyContent: "center", height: 40, width: "35%", alignItems: "center", flexDirection: "row", borderRadius: 60 / 2, marginTop: 20 }}>
            <Text style={{ color: colors.white, fontSize: 20 }}>
              {"Cancel"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onSavePress} style={{ backgroundColor: colors.white, justifyContent: "center", height: 40, width: "35%", alignItems: "center", flexDirection: "row", borderRadius: 60 / 2, marginTop: 20 }}>
            <Text style={{ color: colors.pink, fontSize: 20 }}>
              {"Save"}
            </Text>
          </TouchableOpacity>
        </View>
      </Layout>
    );
  }
}


