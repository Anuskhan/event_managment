import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DrawerItemsComponentStyle from './DrawerItemsComponentStyle';
import { NavigationActions } from 'react-navigation';
export default class DrawerItemsComponent extends Component<{}> {
    navigationScreenFunction = (nextRouteName) => {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: nextRouteName })]
        }))
    }
 
    render() {
        // console.log(this.props.screenProps.logedIn,'screen')
        var check=this.props.screenProps.logedIn;
        let { navigation } = this.props;
        return (
            <View style={DrawerItemsComponentStyle.drawerContainer}>
                <Image style={DrawerItemsComponentStyle.drawerHeaderImage}
                    source={require('../../../assets/images/drawer.jpg')} />
                <ImageBackground style={DrawerItemsComponentStyle.drawerBackgroundImage} source={require('../../../assets/images/drawerbg.jpg')}>
                    <ScrollView>
                        <View style={DrawerItemsComponentStyle.drawerList}>
                            <TouchableOpacity style={DrawerItemsComponentStyle.drawerListItem} onPress={(nextRouteName)=>{this.navigationScreenFunction('Dashboard')}} activeOpacity={0.6}>
                                <Text style={[DrawerItemsComponentStyle.drawerListItemText]}>
                                    <Text style={{justifyContent:'flex-end'}}>Dashborad</Text>
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={DrawerItemsComponentStyle.drawerListItem} onPress={(nextRouteName)=>{this.navigationScreenFunction('Events')}} activeOpacity={0.6}>
                                <Text style={[DrawerItemsComponentStyle.drawerListItemText]}>
                                Events
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={DrawerItemsComponentStyle.drawerListItem} onPress={(nextRouteName)=>{this.navigationScreenFunction('Speaker')}} activeOpacity={0.6}>
                                <Text style={[DrawerItemsComponentStyle.drawerListItemText]}>
                                Speaker
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={DrawerItemsComponentStyle.drawerListItem} onPress={(nextRouteName)=>{this.navigationScreenFunction('Home')}} activeOpacity={0.6}>
                                <Text style={[DrawerItemsComponentStyle.drawerListItemText]}>
                                    Home
                              </Text>
                            </TouchableOpacity>
                           
                          {
                            (check) ? 
                            
                             <TouchableOpacity style={[DrawerItemsComponentStyle.drawerListItem, DrawerItemsComponentStyle.logoutButton]} activeOpacity={0.6}
                            // onPress={(nextRouteName)=>{this.props.navigation.navigate('Login')}}
                            >
                            
                                <Text style={[DrawerItemsComponentStyle.drawerListItemText]}>
                              LogOut
                              </Text>  
                            </TouchableOpacity>
                             : 
                             <TouchableOpacity style={[DrawerItemsComponentStyle.drawerListItem, DrawerItemsComponentStyle.logoutButton]} activeOpacity={0.6}
                            onPress={(nextRouteName)=>{this.props.navigation.navigate('Login')}}
                            >
                            
                                <Text style={DrawerItemsComponentStyle.drawerListItemText}>
                             LogIn
                              </Text>  
                            </TouchableOpacity>
                        }
                        </View>
                    </ScrollView>
                </ImageBackground>
              
            </View>
        );
    }

};


