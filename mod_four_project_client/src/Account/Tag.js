import React from 'react'

import './Tag.css'

class Tag extends React.Component {

    render(){
        
        return(
            <div className='user-tag-wrapper'>
                <div className='user-tag'>
                    {this.props.tag.tag_name}
                </div>
                <button className='user-tag-btn' onClick={() => this.props.handleClickDelete(this.props.tag)}>x</button>      
            </div>
        )
    }
}

export default Tag