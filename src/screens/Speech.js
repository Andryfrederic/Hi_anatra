import React, {
    Component
  } from 'react';
  
  import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  export default class Speech extends Component {
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
                        Hianatra hiteny ireo tsipelina sarotra
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