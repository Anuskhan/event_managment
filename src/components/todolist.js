import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';
import App from './about.2';

// const Example = () => (

//   );
class About extends Component {
    constructor(props){
        super(props);
        this.state={
            text:"",
            array:[]
        }

        
    }
    _textFun(event){
        this.setState({
            text: event.target.value
        })
    }
    Add=()=>{
        var txt=this.state.text;
        var chk=this.state.array;
        chk.push(txt)
        this.setState({
            array:chk
        })
        console.log(this.state.array);
        console.log(chk,"chk");
    
    }
del(index){
    var txt=this.state.text;
    var chk=this.state.array;
    chk.splice(index, 1)
    this.setState({
        array:chk
    })
    console.log(this.state.array);
    console.log(chk,"chk");

}
edit(index){
    var txt=this.state.text;
    var chk=this.state.array;
    chk.splice(index,1, txt)
    this.setState({
        array:chk
    })
    console.log(this.state.array);
    console.log(chk,"chk");

}

    render() {
        return (
            <div>
            <div>Device Test!</div>
            <MediaQuery query="(min-device-width: 1224px)">
              <App/>
              <MediaQuery query="(min-device-width: 1824px)">
                <div>You also have a huge screen</div>
              </MediaQuery>
              <MediaQuery query="(max-width: 1224px)">
                <div>You are sized like a tablet or mobile phone though</div>
              </MediaQuery>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
              <div>You are a tablet or mobile phone</div>
            </MediaQuery>
            <MediaQuery query="(orientation: portrait)">
              <div>You are portrait</div>
            </MediaQuery>
            <MediaQuery query="(orientation: landscape)">
              <div>You are landscape</div>
            </MediaQuery>
            <MediaQuery query="(min-resolution: 2dppx)">
            </MediaQuery>
          </div>
        )
    }
}



export default connect(null,null)(About);
