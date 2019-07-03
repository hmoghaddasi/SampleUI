/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import AppNavigator from './AppNavigator';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/redux/store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


export default class App extends Component {
  render() {
    const store = createStore(reducer, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {/* <StatusBar backgroundColor={"green"}/> */}
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
