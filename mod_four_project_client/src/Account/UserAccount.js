import React from 'react'

import UserEdit from './UserEdit'

class UserAccount extends React.Component {
    render(){
        return(
            <div className='UserAccount-container'>
                <UserEdit />
            </div>
        )
    }
}

export default UserAccount;