import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SecoundPage from './SecoundPage';
import FirstPage from './FirstPage';
import LoginPage from './Login';

const MainNavigator = createStackNavigator({
    FirstPage: FirstPage,
    SecondPage: SecoundPage,
    LoginPage: LoginPage
}, {
        headerMode: "none"
    })


export default createAppContainer(MainNavigator);

