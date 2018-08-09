import { StyleSheet, Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;
// const {height,width} = Dimensions.get('window');

export default LoginStyle = StyleSheet.create({
    loginBackgroundImage: {
        flex: 1
    },
    ButtonStyle: {
     backgroundColor:'#E69008',
     width:'90%',
    alignItems:'center',
    color:'blue',
    borderRadius:5,
    height:50,
    justifyContent:'center',
    // fontStyle:'bold',
    
},

    viewBoxTop: {
        // flex: 0.3,
        height:'40%',
        //  backgroundColor: 'red',
          justifyContent: 'center',
           alignItems: 'center',
        //    marginBottom:20,
    },

    viewBoxButtom: {
        height:'60%',
    },
    textColor: {
        color:'#ffffff',
    fontFamily:'Lato-Regular'
    },

    Logoimage: {
        width: imageWidth,
        marginTop:50,
        marginBottom:20,
        
        resizeMode: 'contain'
    },

        TouchableOpacityStyle: {
        alignItems: 'center',
        marginTop:20,
        marginBottom:20,
        color:'#ffffff'
        // font-family: 'Lato', 
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
        alignItems:'center',
        
        
    },
    TextInputStyle: {
       flex:1,       
       color:'grey',
        // backgroundColor:'red',
       marginRight:10
       
      
    },

    
});
