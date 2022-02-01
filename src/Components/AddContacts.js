import { Component } from "react";
import React from "react";

class AddContacts extends Component{
    state={
        name :"",
        email :"",
    };

    addPostHandler=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All fields are mandatory..!");
        }
        else{
            this.props.newcontact(this.state);
            this.setState({name:"",email:""})
        }
    };

    textChange=(name,e)=>{
        this.setState({
            [name]:e.target.value,
        });
    };

    render(){
        return (
            <div className="ui main">
                <div className="ui divider" style={{borderTop:"5px solid black"}}></div>
                <h2>Add Contacts</h2>
                <form onSubmit={this.addPostHandler} className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={this.textChange.bind(this,"name")} placeholder="Name"></input>
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="email" value={this.state.email} onChange={this.textChange.bind(this,"email")} placeholder="Email"></input>
                    </div>

                    <button className="ui button blue">Add</button>


                </form>
            </div>
        );
    }
}

export default AddContacts;
