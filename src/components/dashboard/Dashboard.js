import React, { Component } from 'react';
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

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
          
        }
    }

    onChange(name, val){
        this.setState({[name]: val})
    }

    componentWillMount(){
        axios.post('members/', payload)
        .then((response) => {
      console.log(response,"response")    
    }).catch((error) => {
        
        console.log(error,"error")    
        }
        );
    }
    render() {
        return (
          
                <View >
                    <Text>
                        Dashboard
                    </Text>
                </View>
            
            
        );
    }

};

