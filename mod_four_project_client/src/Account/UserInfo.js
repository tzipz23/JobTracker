import React, { Component } from 'react'
import Tag from './Tag'

import './UserInfo.css'

class UserInfo extends Component {

    constructor() {
        super()
        this.state = {
            tag: "",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let {tag} = this.state
 
        fetch("http://localhost:3001/tags", {
            method: "POST",
            headers: {'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                tag_name: tag
            })
        })
        .then(r => r.json())
        .then(data => {
            this.props.addTag(data)
            this.setState({tag: ""})
            return console.log(data)
        })
    }


    handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }


    render() {
        const tags = this.props.tags.map(tag => <Tag key={tag.id} tag={tag} handleClickDelete={this.props.handleClickDelete}/>)
        
        return(
            <div className='UserInfo-wrapper'>
                <h2>Your Search Tags</h2>
                <div className='tag-wrapper-cont'>
                    {tags}
                </div>
                <div className='tag-form'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Create New Tag: 
                            <input type="text"  
                                   placeholder="your new tag" 
                                   name="tag"
                                   value={this.state.tag} 
                                   onChange={this.handleChange} 
                            />       
                        </label>
                        <button type="submit">Create Tag</button>
                    </form>
                </div>
                {/* <h2>Total No of Job Listings Saved:</h2> */}
                <hr/>
            </div>
        )
    }

}

export default UserInfo