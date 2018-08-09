import { StackNavigator } from 'react-navigation';
import { StyleSheet, Image, View, Text } from 'react-native';
import Login from '../login/Login';
import Dashboard from '../dashboard/Dashboard';
import SignUp from '../signup/signup';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';



const styles = StyleSheet.create({
    test: {
        fontSize: 30,
        alignSelf: 'center',

    },
    buttonStyle: {
        backgroundColor: '#053173',
        marginBottom: 3,

    },
    headerLogoContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 7
    },
    headerLogoImage: {
        width: 50,
        height: 38
    },
});
const headerTintColor = "#fff";
const headerStyle = {

    backgroundColor: '#053173',
    height: 55
};


export const MainStack = StackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null,
        }
    },
   
    Signup: {
        screen: SignUp,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
   
}, {
        initialRouteName: 'Dashboard',
        navigationOptions: {
            headerTitle: <View style={styles.headerLogoContainer}>
                {/* <Image style={styles.headerLogoImage} source={require('../../assets/images/header-logo.png')} /> */}

            </View>,
            headerTintColor: headerTintColor,
            headerStyle: { ...headerStyle }
        }
    });