import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Drawer } from './src/components/routing/route'
import {Provider} from 'react-redux';
// import store from './src/store';
export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      logedIn:false
    }
  }
  logout(){
    this.setState({logedIn: false})
  }
  login(){
    this.setState({logedIn: true})
  }
  
  render() {
    return (
        <View style={styles.container}>

         <Drawer screenProps={{logedIn: this.state.logedIn}}/>

        
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
