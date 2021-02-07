import React, {
    Component
  } from 'react';
  
  import {
    Text,
    View,
  } from 'react-native';
  import StylesAlpha from './statics'

  export default class Alfabet extends React.Component {

      render() {

          return (
            <View style={StylesAlpha.container}>
                    <Text style={StylesAlpha.center}>
                        Alphabet
                    </Text>
            </View>
          );
        }
      }
  
