import React from 'react'

import HomeText from './HomeText'
import VideoContainer from './VideoContainer'
import './Home.css'

class Home extends React.Component {

    render(){
        return(
            <div className='Home'>
                <h2 className='landing-text'>Welcome to JobTestr!</h2>
                <p> Please feel free to check out the cool video below:</p>
                <VideoContainer />
                <HomeText />
            </div>
        )
    }

}

export default Home;