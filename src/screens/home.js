import React, {
    Component
  } from 'react';
  
  import {
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';
  import Header from '../header/layouts/Header'
  import Styles from './statics'

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
              <Header/>
              <Image style={Styles.welcome_image}
                    source={require('./statics/images/baby_with_phone.jpg')}>
              </Image>
            </View>
          );
        }
      }
  
      const styles = StyleSheet.create({
          container: {
  flex:1
          }
        });