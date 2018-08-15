
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, Platform, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

// import EventStyle from "./EventStyle";

class Speaker extends Component {

    constructor(props) {
        super(props);
        this.state = {
           votes:0
        }
    }

    interested=()=>{
    this.setState({
        votes:this.state.votes+1
    })
    if(this.state.votes==1){
this.setState({
    votes:0
})
alert(this.state.votes)
 }
}

    render() {
      let {arr}=this.state;
        return (
            <View>
               
               <View style={{alignItems:'center'}}>
                   <TouchableOpacity style={{width:100,height:100,alignItems:"center",borderWidth:1,justifyContent:'center'}} onPress={this.interested}>
                   <Text> interested</Text>
                   </TouchableOpacity>
                <Text>Speaker</Text>
                <Text>{this.state.votes}</Text>
            </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({

});
export default connect(mapStateToProps)(Speaker);

