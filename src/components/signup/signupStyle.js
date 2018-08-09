import { StyleSheet, Dimensions } from 'react-native';
import SignUp from './signup';

const imageWidth = Dimensions.get('window').width / 2;
// const {height,width} = Dimensions.get('window');

export default signUpStyle = StyleSheet.create({
    loginBackgroundImage: {
        flex: 1
    },
    ButtonText: {
        color:'#053173',
        fontFamily:'Lato-Bold'
    },
    ButtonStyle: {
     backgroundColor:'#E69008',
     width:'90%',
    alignItems:'center',
    color:'blue',
    borderRadius:5,
    height:50,
    marginTop:30,
    justifyContent:'center'
    },

    viewBoxTop: {
        // flex: 0.2,
        height:'40%',
        // width:'100%',
        //  backgroundColor: 'red',
          justifyContent: 'center',
           alignItems: 'center',
        //    marginBottom:20,
    },

    viewBoxButtom: {
        height:'60%',
        marginTop:10,
        
        //   backgroundColor: 'green',
        //   alignItems: 'center',
        //   justifyContent: 'center'

    },

    Logoimage: {
        width: imageWidth,
        marginTop:50,
        marginBottom:20,
        resizeMode: 'contain'
    },
  
    TextInputView: {
        // backgroundColor:'red',
        marginTop:10,
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white',
        width: '90%',
        borderRadius:5,
        paddingHorizontal:10,
        alignItems:'center'
        
        
    },
    TextInputStyle: {
       flex:1,       
       color:'grey',
        // backgroundColor:'red',
       marginRight:10
       
      
    },

    
});
