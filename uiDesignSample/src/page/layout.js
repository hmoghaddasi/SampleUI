// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { logo, facebook, twitter } from '../../assets';
// import Icon from 'react-native-vector-icons/Ionicons';

// const colors = {
//     "orange": "#ff7745",
//     "pink": "#f5326f",
//     "white": "#fff"
// }
// export default class Layout extends Component {
//     render() {
//         const { pinkTitle, whiteTitle } = this.props
//         return (
//             <View style={{ width: '100%', height: '100%', alignItems: "center" }}>
//                 <LinearGradient colors={[colors.orange, colors.pink]} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
//                 <Image source={logo} style={{ width: `45%`, height: 70, marginTop: 40 }} />
//                 <View style={{ flexDirection: "row", width: '45%',  justifyContent: "center", alignItems: "center" }}>
//                     <Text style={{ fontSize: 35, color: colors.pink }}>{pinkTitle}</Text>
//                     <Text style={{ fontSize: 35, color: colors.white }}>{whiteTitle}</Text>
//                 </View>
//                 <Text style={{ fontSize: 16, color: colors.white, textAlign: "center", width: '55%' }}>{"Find and meet person around you to frodLOVE"}</Text>
//                 {this.props.children}
//             </View>
//         );
//     }
// }
