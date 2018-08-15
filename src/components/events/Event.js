import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList, Platform, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import EventStyle from "./EventStyle";

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr:[
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"khan",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"},
                {name:"anas",detail:"something",phone:"0345223425"}
        ]
        }
    }

    renderItem({ item, index }) {
        return (
            <TouchableOpacity activeOpacity={0.5} style={EventStyle.listItem} onPress={() => this.props.navigation.navigate('EventDetail', { item })}>
                
                <View style={EventStyle.listItemDetail}>
                    <Text style={{fontSize:17,color:"black"}}>Name :</Text>
                   <Text >Discribtion</Text> 
                   <Text>date</Text> 
                </View>
            </TouchableOpacity>
        )
    };
   

    render() {
      let {arr}=this.state;
        return (
            <View>
               
                    <FlatList
                        data={arr}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={(item, index) => { return index.toString() }}
                    />
 
            </View>
        )
    }
}
const mapStateToProps = (state) => ({

});
export default connect(mapStateToProps)(Events);

