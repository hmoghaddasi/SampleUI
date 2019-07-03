import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
// import SecoundPage from './SecoundPage';
import FirstPage from './FirstPage';
import LoginPage from './Login';
import AradoPage from './AradoPage';
import ThirdExercise from './ThirdExercise';
import MyMenu from './menu';
import { SecoundPage } from './src/page';
// import {FirstPage, SecoundPage, LoginPage, AradoPage} from './src'
const MyDrawer = createDrawerNavigator({
    Home: ThirdExercise,
    Search: ThirdExercise
}, {
        contentComponent: (e) => { return (<MyMenu params={e} />) },

    })

const MainNavigator = createStackNavigator({
    //  ThirdExercise: ThirdExercise,
    // MyDrawer: MyDrawer,
    // SP: SecoundPage,
    // AradoPage: AradoPage,
    FirstPage: FirstPage,
    // SecondPage: SecoundPage,
    LoginPage: LoginPage,
}, {
        headerMode: "none"
    })


export default createAppContainer(MainNavigator);

