import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class About extends Component {
    constructor(props){
        super(props);
        this.state={
            text1:"",
            text2:"",
            text3:"",
            array:[]
        }

        
    }
    _textFun1(event){
        this.setState({
            text1: event.target.value
        })
    }
    _textFun2(event){
        this.setState({
            text2: event.target.value
        })
    }
    _textFun3(event){
        this.setState({
            text3: event.target.value
        })
    }
    Add=()=>{
        var chk=this.state.array;
        let obj={
            name:this.state.text1,
            email:this.state.text2,
            class:this.state.text3,
        }
        chk.push(obj)
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
                <h1>student List</h1>
               <label>Student Name:<input value={this.state.text1} onChange={this._textFun1.bind(this)}/></label>
               <label>student Email:<input value={this.state.text2} onChange={this._textFun2.bind(this)}/></label>
               <label>student class:<input value={this.state.text3} onChange={this._textFun3.bind(this)}/></label>
                <button onClick={this.Add}>Add</button>
                <h2>List</h2>
                {
                 this.state.array.forEach((element,val)=> {
                    console.log(element.name,"ele")
                    console.log(val,"val")
               return(
                   <div>
                   <h2 id={val}> {element.name}</h2>
                   </div>
                
               )   
                  })
                    
                }
             </div>
        )
    }
}



export default connect(null,null)(About);
