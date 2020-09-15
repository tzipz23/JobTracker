import React from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'


class SearchContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            queryDetails: {
                query: "",
                minSalary: "",
                distance: "",
                where: ""
               
            },
            staticDetails: {
                resultsCount: "50",
                sortBy: "salary",
                country: 'us'
            },
            apiDetails: {

            },
            results: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getSearchResults()
        console.log('submit')
    }
  
    handleChange = (e) => {
        let newQuery = this.state.queryDetails
        newQuery[e.target.name] = e.target.value
        this.setState({queryDetails: newQuery})
        
    }

    componentDidMount(){
        //api key and id
        fetch(`http://localhost:3001/search`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( r => r.json())
        .then(data => {
            this.setState({apiDetails: data.api_data})
            console.log(data)
        })
    }


    getSearchResults() {
        fetch(`https://api.adzuna.com/v1/api/jobs/${this.state.staticDetails.country}/search/1?app_id=${this.state.apiDetails.id}&app_key=${this.state.apiDetails.key}&results_per_page=${this.state.staticDetails.resultsCount}&what=${this.state.queryDetails.query}&where=${this.state.queryDetails.where}&distance=${this.state.queryDetails.distance}&sort_by=${this.state.staticDetails.sortBy}&full_time=1`, {
            method: 'GET'
        })
        .then( r => r.json() )
        .then( data => {
            this.setState({results: data.results})
            return console.log(data)
        })
    }
    
    render(){
        return(
            <div className='searchContainer-wrapper'>

                <div className="searchContainer">
                    <SearchForm handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                        queryDetails={this.state.queryDetails}/>
                    <SearchResults results={this.state.results}/>
                </div>

            </div>
        )
    }
}

export default SearchContainer;