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
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginStyle from './LoginStyle';

export default class Login extends Component<{}> {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    onChange(name, val) {
        this.setState({ [name]: val })
    }

    render() {
        return (
            // <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/loginbackground.png')}>
                <ScrollView>
                    <View style={LoginStyle.viewBoxTop} >
                        <Image style={LoginStyle.Logoimage}
                            source={require('../../assets/images/logo.jpg')} />
                    </View>

                    <View style={LoginStyle.viewBoxButtom} >
                        <View style={{ alignItems: 'center' }}>
                            <View style={LoginStyle.TextInputView}>
                                <TextInput underlineColorAndroid='transparent'
                                    style={LoginStyle.TextInputStyle}
                                    placeholder="Email" placeholderTextColor="#b2b2b2"
                                    onChange={this.onChange.bind(this, 'email')}
                                    value={this.state.email}
                                />
                                <Ionicons color='gray' size={24} name="ios-mail-outline" />
                            </View>
                            <View style={LoginStyle.TextInputView}>
                                <TextInput underlineColorAndroid='transparent'
                                    style={LoginStyle.TextInputStyle}
                                    placeholderTextColor="#b2b2b2"
                                    onChange={this.onChange.bind(this, 'password')}
                                    placeholder="Password"
                                    value={this.state.password}
                                />
                                <Ionicons color='gray' size={24} name="ios-lock-outline" />
                            </View>
                            
                            <TouchableOpacity style={LoginStyle.ButtonStyle}
                             onPress={() => { this.props.navigation.navigate("Home") }}
                            >
                                <Text style={{ color: '#053173',fontFamily:'Lato-Bold' }}>
                                    LOG IN
                 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={LoginStyle.TouchableOpacityStyle}
                                onPress={() => { this.props.navigation.navigate("Signup") }}
                            >
                                <Text style={LoginStyle.textColor} >
                                    Create new account
                 </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            // </ImageBackground>

        );
    }

};

