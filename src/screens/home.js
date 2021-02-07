import React, {
    Component
  } from 'react';
  
  import {
    Text,
    View,
    Image,
    ImageBackground 
  } from 'react-native';
  import Header from '../header/layouts/Header'
  // import Alfabet from '../buttons/Alphabet/Alphabet'
  import Vignette from '../vignette/Vignette'
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
            <ImageBackground style={Styles.welcome_image}
                                source={require('./statics/images/baby_with_phone.jpg')}>

                      <View
                      style={Styles.container}>
                          
                          
                              <View
                              style={Styles.Activities}
                              >
                                        {/* <Header/> */}
                                        <View>
                                                <Vignette Activity="A Bi Di" Color="grey"/>
                                                <Vignette Activity="Vakiteny"/>
                                        </View>
                                        <View>
                                                <Vignette Activity="Hira"/>
                                                <Vignette Activity="Sary"/>
                                        </View>
                                  

                              </View>
                      </View>
             </ImageBackground>
            
          );
        }
      }