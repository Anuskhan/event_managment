import React, {Component} from "react";
import {connect} from "react-redux";
import {useable }from "../store/action/action"
import * as firebase from "firebase";
import './style.css';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
let Background="./518800-widescreen-spring-flowers-background-1920x1200-computer.jpg";
var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { Background } + ")"
  };
class Chk extends Component{
constructor(props){
    super(props);
    this.state={
           name:"ANas",
           email:"email",
           img:"",
           number:"",
           cal:"",
           dis:"",
           showResults:false,
           count:5,
    }
}
runfun=()=>{
    let obj ={
        email:this.state.email,
        name:this.state.name
    }
  this.props.useable(obj);  

  var file =this.state.img;
    var storageRef = firebase.storage().ref('/').put(this.state.img);
}
_onChangenum=(event)=>{
    console.log(event.target.value)
    this.setState({
        number:event.target.value
    })
}
_onChangedis=(event)=>{
    console.log(event.target.value)
    this.setState({
        dis:event.target.value
    })
}

render(){
    return(
        <MuiThemeProvider>
<AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
 <Badge
      badgeContent={4}
      primary={true}
    >
      <NotificationsIcon />
    </Badge>
    <Badge
      badgeContent={this.state.count}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Notifications">
        <NotificationsIcon />
      </IconButton>
    </Badge>
      </MuiThemeProvider> 

)
}


}

function mapStateToProp(state) {
    console.log(state.root.array,"state")
    return ({
        // userName: state.root.Name
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        useable: (user)=>{
            dispatch(useable(user))
        }
    })
}
export default connect(mapStateToProp, mapDispatchToProp)(Chk);
