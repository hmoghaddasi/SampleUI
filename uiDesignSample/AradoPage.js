import React, { Component } from 'react'
import { View, Image, Text } from 'react-native';
import { arado, img1, img2, img3, img4, img5, img6 } from './assets';
import MyBox from './MyBox';

const colors = {
    "green": "#33DA8A",
    "white": "white"
}
export default class AradoPage extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: colors.green }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={arado} style={{ width: `50%`, height: 70, marginTop: 90 }} ></Image>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: colors.white }}>{"Ver: 21.1.0"}</Text>
                        <Text style={{ color: colors.white }}>{"راهگشای هوشمند کشاورزی"}</Text>
                    </View>
                </View>
                <View style={{
                    width: '100%', height: '50%', justifyContent: 'flex-start', position: 'absolute',
                    top: '50%', left: 0, right: 0, bottom: 0, backgroundColor: colors.white, borderTopLeftRadius: 100 / 2, borderTopRightRadius: 100 / 2 }}>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', position: 'absolute', top: '45%', left: 15, right: 15, bottom: 80 }}>
                    <View style={{ flexDirection: "column", justifyContent: 'space-between', marginBottom:28}}>
                        <MyBox image={img3} text="املاک"></MyBox>
                        <MyBox image={img6} style={{ marginTop: 20 }} text="سکوی صادرات"></MyBox>
                    </View>
                    <View style={{ marginTop: 28 ,flexDirection: "column", justifyContent: 'space-between'}}>
                        <MyBox image={img2} text="سفارش خرید/تولید"></MyBox>
                        <MyBox image={img5} style={{ marginTop: 20 }} text="خدمات دهندگان"></MyBox>
                    </View>
                    <View style={{flexDirection: "column", justifyContent: 'space-between', marginBottom:28}}>
                        <MyBox image={img1} text="آگهی های فروش"></MyBox>
                        <MyBox image={img4} style={{ marginTop: 20 }} text="نیروی کار"></MyBox>
                    </View>
                </View>
            </View>
        )
    }
}
