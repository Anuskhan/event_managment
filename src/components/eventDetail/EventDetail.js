import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, Platform, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

 import EventDetailStyle from "./EventDetailStyle";

class EventDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

   componentWillMount(){
    console.log(this.props.navigation.state.params,"detail");
   }
    render() {
        return (
            <View>
                   <View style={{marginTop:30}}>
                   <View style={{position:"absolute",left:0,right:0,zIndex:2,alignItems:'center'}}>
                            <View style={{width:150,height:150,borderWidth:2,borderColor:'black',zIndex:1}}>
                             <Text style={{alignContent:'center',position:"relative",justifyContent:"center"}}>profile</Text>
                            </View>
                        </View>
                   </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({

});
export default connect(mapStateToProps)(EventDetail);

