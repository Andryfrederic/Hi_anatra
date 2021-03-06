import {
    StyleSheet,
    Dimensions 
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
    container:{flex:1,
    width:windowWidth,
    height:windowHeight},
  
    Activities: {
      flexDirection:'row',
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'space-evenly',
      width:windowWidth,
    height:windowHeight
},
marge:{
  marginTop:10
},
welcome_image:{
width:400,
height:600
}
  });
  export default Styles;