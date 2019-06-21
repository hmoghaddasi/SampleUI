import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import SecoundPage from './SecoundPage';
import FirstPage from './FirstPage';

const MainNavigator=createStackNavigator({
    FirstPage: FirstPage,
    SecondPage: SecoundPage
},{
    headerMode: "none"
})


export default createAppContainer(MainNavigator);

