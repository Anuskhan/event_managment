import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Drawer } from './src/components/routing/route'
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
// event event details
//	id	name	email	password	remember_token	created_at	updated_at
//event start_at	end_at text	name place version level_id type_id	track_id
//url event_type order deleted_at created_at updated_at 

/// EVENT id	start_at	end_at	text	name	place	version	level_id	type_id	track_id	url	event_type	order	deleted_at	created_at	updated_at	conference_id
//LOACTION id	name	lat	lon	address	order	deleted_at	created_at	updated_at	conference_id
