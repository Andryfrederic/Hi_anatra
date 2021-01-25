import React, {
    Component
  } from 'react';
  
  import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import headerStyle from '../statics'

  export default class Header extends React.Component {

      render() {

          return (
            <View style={headerStyle.container}>
                    <Text style={headerStyle.center}>
                        Hianatra
                    </Text>
            </View>
          );
        }
      }
  
