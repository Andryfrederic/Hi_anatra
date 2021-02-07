import React, {
    Component
  } from 'react';
  
  import {
    Text,
    View,
  } from 'react-native';
  import StylesVi from './statics'

  export default class Vignette extends React.Component {

      render() {

          return (
            <View style={StylesVi.container}>
                    <Text style={StylesVi.center}>
                        {this.props.Activity}
                    </Text>
            </View>
          );
        }
      }
  
