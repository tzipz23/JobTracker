import React from 'react'
class Result extends React.Component {

    state = {apiDetails: {}}

    handleSave = () => {

        fetch(`http://localhost:3001/listing`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({listing: this.props.result})
        })
        .then( r => r.json())
        .then(data => {
            this.setState({apiDetails: data.api_data})
            console.log(data)
        })
    }

    render(){
        let {title, company, salary_is_predicted} =  this.props.result
        return(
            <div className="result">
              <div className="resultinfo"><h3>Position:  </h3> <span>{title}</span></div> 
               <div className="resultinfo"><h3>Company Name:  </h3> <span>{company.display_name}</span></div>
               <div className="resultinfo"><h3>Salary:  </h3> <span>{salary_is_predicted}</span></div>
               {/* Location */}
               <button className='UA-save-btn' onClick={this.handleSave}>Save</button>
            </div>

        )
    }
}

export default Result;



/*

__CLASS__
"Adzuna::API::Response::Job"
adref
"eyJhbGciOiJIUzI1NiJ9.eyJzIjoiWE1UVUNKeV82aEduRDVXcE9jQ1RWdyIsImkiOiIxMzk1OTQ1NDA3In0.Q5dUblH-r-4F5uZSLpYvHNydKGbMtO-9PKggbAIz-hU"

category
{__CLASS__: "Adzuna::API::Response::Category", labe…}

company
{__CLASS__: "Adzuna::API::Response::Company", displ…}
contract_time
"full_time"
created
"2020-01-04T01:35:37Z"
description
"...  to support the Naval Research Laboratory, Tactical Electronic Warfare Division (TEWD). We are looking for a self-starter with excellent technical skills to perform <strong>software</strong> reverse ...  <strong>engineering</strong> for the purposes of stopping emerging threats by advanced electronic warfare (EW) through simulation, testing and evaluation. Desired Qualifications Experience with Real Time ..."
id
"1395945407"
latitude
38.93954

location
{__CLASS__: "Adzuna::API::Response::Location", area…}
longitude
-77.08921
redirect_url
"https://www.adzuna.com/land/ad/1395945407?se=XMTUCJy_6hGnD5WpOcCTVw&utm_medium=api&utm_source=6f19bb37&v=A2E6059926EADE7F7DB8468FA40880CE22AED6DF"
salary_is_predicted
"0"
title

*/