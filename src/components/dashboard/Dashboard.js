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

    componentDidMount(){
       this.checkApi()
    }
    checkApi=()=>{
        
        console.log("componentDidMount+======")
        // axios.get(`https://jsonplaceholder.typicode.com/posts`)
        axios.get('http://connfa.com/api/getinfo/')
        .then((res) => {
      console.log(res.data,"response")    
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
                    <TouchableOpacity onPress={this.checkApi} style={{borderWidth:1,height:50}}>
                        <Text >
                            click
                        </Text>
                    </TouchableOpacity>
                </View>
            
            
        );
    }

};

