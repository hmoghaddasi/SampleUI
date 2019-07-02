import React, { Component } from 'react'
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {menu} from './assets';
import MyMenu from './menu';

const colors = {
    "white": "#fff",
    "purple":"purple"

}


export default class MyHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuShow: false,
    };
    this.setShowMenu = this.setShowMenu.bind(this)
}

  setShowMenu(visible) {
    this.setState({ menuShow: visible });
  }
    render() {
      const { menuShow } = this.state
      const {onMenuItemPress, name} = this.props
      console.log(name ,"============= name header")
        return (
          <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{ backgroundColor: colors.white, alignItems:'center', height: 36, width: 36,  borderRadius: 5 / 2,
              marginTop:10, marginLeft:10, borderColor:colors.purple}} onPress={onMenuItemPress}>
                <Image source={menu} style={{ width: 32, height: 32, resizeMode: 'stretch', tintColor: colors.purple }} ></Image>
              </TouchableOpacity>
              <View style={{alignItems:"center"}}>
              <Text style={{ color: colors.purple, alignSelf:'center', fontSize:36}}>
                {name}
              </Text>
              </View>

          </View>
        )
    }
}
