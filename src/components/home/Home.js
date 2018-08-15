import React, { Component } from 'react';
import {connect} from "react-redux";

import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Button,
    ImageBackground
} from 'react-native';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();
        this.state = {
          new:""
        }
    }

    onChange(name, val){
        this.setState({[name]: val})
        console.log(this.state.new)
    }

    componentDidMount(){
    }
  
    render() {
        return (
          
                <View >
                    <Text >
                        Home
                    </Text>
                    <TextInput value={this.state.new}  onChange={this.onChange.bind(this, 'new')}/>
                </View>
            
            
        );
    }

};

function mapStateToProp(state){
    console.log(state,"storestate");
  
    return({
    })
}  
export default connect(mapStateToProp)(Home);
