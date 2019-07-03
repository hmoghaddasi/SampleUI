import React, { Component } from 'react'
import { TextInput } from 'react-native';
// import colors from './colors';

const colors = {
    "orange": "#ff7745",
    "pink": "#f5326f",
    "white": "#fff"
}
export default class MyTextInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {} = this.props
        return (
            <TextInput placeholderTextColor={colors.white}  style={{
                fontSize: 20, color: colors.white, width: '95%',
                height: 40, textAlign: "left", marginTop: 20, borderBottomColor: colors.white, borderBottomWidth: 1
            }} {...this.props} />
        )
    }
}
