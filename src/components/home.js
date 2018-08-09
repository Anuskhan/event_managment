import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {NameFun,fatchdatafun} from '../store/action/action';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: '',
            valname:''
        }
    }
    Namechange(){
        
        let nam=this.state.valname; 
        console.log(nam,'event called');
        this.props.NameFun(nam);
        this.props.fatchdatafun(nam);
    }
    // fatchdata(){
        
    //     let local=this.state.location; 
    //     console.log(local,'event called');
    //     this.props.fatchdatafun(local);
    // }
    // valueGet=(inputfld,ev)=>{
    //     let obj={}
    //     obj[input]=ev.target.value;
    //     this.setState(obj);
    //     console.log(obj);
    //     }
    valueGet=(inputfld,ev)=>{
        let obj={}
        obj[inputfld]=ev.target.value;
        this.setState(obj);
        console.log(obj);
        }
        
    render() {
        return (
            <div>
                <h1>Hello World {this.props.name} </h1>
                <input type="text" value={this.state.valname}   onChange={(ev)=>{this.valueGet("valname",ev)}}/>
                {/* <button onClick={this.fatchdata.bind(this)}>get</button> */}
                <button onClick={this.Namechange.bind(this)}>Change Name</button>
                {/* {console.log(this.props.get,"gte")} */}
            </div>
        )
    }
}

function mapStateToProp(state){
    console.log(state.root,"state")
    return({
        // get: state.reducer.getdata,
        name:state.root.name
    })
}
function mapDispatchToProp(dispatch){
    return({
        NameFun: (name)=>{dispatch(NameFun(name))},
        fatchdatafun: (data)=>{dispatch(fatchdatafun(data))},
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Home);

