import * as React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
});

export default createAppContainer(AppNavigator);
