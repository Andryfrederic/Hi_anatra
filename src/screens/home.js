import React, {
    Component
  } from 'react';
  
  import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  export default class Home extends Component {
    static navigationOptions =
     {
      headerShown: false
     };
  
      constructor(props) {
          super(props);
      
          this.state = {
          
                         }
        }
      render() {

          return (
            <View style={styles.container}>
                    <Text>
                        Hianatra izahay
                    </Text>
            </View>
          );
        }
      }
  
      const styles = StyleSheet.create({
          container: {
  flex:1
          }
        });