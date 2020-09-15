import React from 'react'

import {Link, Route} from 'react-router-dom' 
import extLink from '../images/external-link.svg'

import './JobListingDetail.css'
import JobListingShowPage from './JobListingShowPage'

class JobListingDetail extends React.Component {

    cleanTagData() {
        let tempObj = {}
    
        let textArray = this.props.listing.snippet.toLowerCase().split(" ")
        this.props.tags.forEach(tag => {
            let filteredArray = textArray.filter(text => tag.tag_name.toLowerCase() === text )
            if (tempObj[tag.tag_name]){
                tempObj[tag.tag_name] += filteredArray.length
            } else {
            tempObj[tag.tag_name] = filteredArray.length
            }
        })
        // {agile: 1, finance: 0, work: 1}
         let tag_array = Object.entries(tempObj).map( t => {
             // [[agile, 1], [finance, 0], [work, 1]]
             return {tag: t[0], count: t[1]}
             // [{tag: agile, count: 1}, {tag: finance, count: 0}, {tag: work, count: 1}]
        } )
        return tag_array
    }

    render(){
        let tagData = this.cleanTagData()
        let filteredTags = tagData.filter( tagCount => tagCount.count > 0 )
        // console.log(filteredTags)
      
        return(
            <div className='JobListingDetail' >
                <Link to ={`research/${this.props.listing.id}`} >Title: {this.props.listing.job_title} </Link>
                <div className='JobListing-subtitle-container'>
                    <div className='JobListing-subtitle'>
                        <strong style={{color: 'blue'}}>Company:</strong> {this.props.listing.company}
                    </div>
                    <div className='JobListing-subtitle'>
                        <strong style={{color: 'blue'}}>City:</strong> {this.props.listing.city}
                    </div>
                </div>
                
                <a href = {this.props.listing.job_url}><img src={extLink} style={{height: '1rem', width: '1rem'}} alt="external link icon" /></a>
              
                <Route exact path='research/:id' render={() => <JobListingShowPage key = {this.props.listings.id} listing={this.props.listing}/>} />

                <hr/>

                <div className='tag-wrapper'>
                    {filteredTags.map( t => <div className="tag"> <strong>{t.tag}</strong>: {t.count}</div>)}
                </div>
            </div>
        )
    }
}

export default JobListingDetail