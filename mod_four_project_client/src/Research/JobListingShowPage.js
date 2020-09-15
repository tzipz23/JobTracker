import React from 'react'
import MapContainer from './MapContainer'

import './ShowPage.css'

class JobListingShowPage extends React.Component {

    componentDidMount() {
        //use the id in the url to fetch and load data
         //on the back end find and return data for listing_id == 4
    }
    render(){
        let listingInfo = this.props.listings.find( (l) => l.id === this.props.id)
        // console.log(listingInfo)
        return(
            <div className='JobInfo-container'>                
               { listingInfo ? 
                (
                    <div className='JobInfo'>
                        <div className='JobText'>
                            <div className='JobTitle main'><strong style={{color: 'blue'}}>Title:</strong > {listingInfo.job_title}</div>
                            <div className='JobTitle'><strong style={{color: 'blue'}}>Company:</strong > {listingInfo.company}</div>
                            <div className='JobTitle'><strong style={{color: 'blue'}}>City:</strong > {listingInfo.city}</div>
                            <div className='JobTitle'><strong style={{color: 'blue'}}>State:</strong > {listingInfo.state}</div>
                            <div className='JobTitle'><strong style={{color: 'blue'}}>Work hours:</strong > {listingInfo.contract_time}</div>
                            <div className='JobTitle'><strong style={{color: 'blue'}}>Posted on:</strong > {listingInfo.created_at}</div>
                            <div className='JobTitle long'><strong style={{color: 'blue'}}>Description:</strong > <div>{listingInfo.snippet}</div></div> 
                        </div>

                        <div className='MapContainer-wrapper' style={{height: '300px', width: '600px'}} >
                            <MapContainer location={{lat: listingInfo.latitude, lng: listingInfo.longitude}} />
                        </div>  
                    </div>              
                )
                    : null
            }
            </div>
        )
    }
}

export default JobListingShowPage