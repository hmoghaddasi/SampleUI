import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SecoundPage from './SecoundPage';
import FirstPage from './FirstPage';
import LoginPage from './Login';
import AradoPage from './AradoPage';
import ThirdExercise from './ThirdExercise';
// import {FirstPage, SecoundPage, LoginPage, AradoPage} from './src'

const MainNavigator = createStackNavigator({
    ThirdExercise: ThirdExercise,
    AradoPage: AradoPage,
    FirstPage: FirstPage,
    SecondPage: SecoundPage,
    LoginPage: LoginPage,
}, {
        headerMode: "none"
    })


export default createAppContainer(MainNavigator);

