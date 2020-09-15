import React, { Component } from 'react'

class UserEdit extends Component {

    state = {value: ""}

    handleChange(e){
        let {value} = this.state
        
    } 

    render(){
        return(
            <div>
                <h1>Your Account</h1>
                <form>
                    <label>
                        First Name
                        <input
                            type="text"
                            name="first_name"
                            value = {this.state.value || ""}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Last Name
                        <input
                            type="text"
                            name="last_name"
                            value = {this.state.value || ""}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Username
                        <input
                            type="text"
                            name="username"
                            value = {this.state.value || ""}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Password
                        <input
                            type="text"
                            name="password"
                            value = {this.state.value || ""}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Zipcode
                        <input
                            type="number"
                            name="zipcode"
                            value = {this.state.value || ""}
                            onChange = {this.handleChange}
                        />
                    </label>
                    <br/>
                    <button className='UA-save-btn' type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default UserEdit 