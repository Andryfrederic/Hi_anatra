import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Speech from '../screens/Speech';
import Home from '../screens/Home'

const RootStack = createStackNavigator(
    {
      Home: Home,
      Speech:Speech
    },
    {
      initialRouteName: 'Home',

    }
   )
const Root = createAppContainer(RootStack);
export default Root;