import React from 'react'

class SearchForm extends React.Component {
    render(){
        return(
            <div className='search-form-wrapper'>
                <form onSubmit={this.props.handleSubmit}>
                    <div className='form-row'>
                         < label > Job Title: 
                            <input name='query' value={this.props.queryDetails.query || ""} onChange={this.props.handleChange} placeholder = 'Software Engineer' required />
                        </label>
                        < label > Minimum Salary: 
                            <input name='minSalary' value={this.props.queryDetails.minSalary || ""} onChange={this.props.handleChange} type='number' placeholder = '50000'  />
                        </label>
                    </div>
                   <div className='form-row'>
                        < label > Zip Code: 
                            <input name='where' value={this.props.queryDetails.where || ""} onChange={this.props.handleChange} type='number' placeholder = '20001' required />
                        </label>
                        < label > Distance (Radius in miles): 
                            <input name='distance' value={this.props.queryDetails.distance || ""} onChange={this.props.handleChange} type='number' placeholder = '50' required />
                        </label>

                   </div>

                   
                  
                    <br/>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchForm


// queryDetails: {
//     query: "software%20engineer",
//     minSalary: "30000",
//     resultsCount: "100",
//     where: "20001", 
//     sortBy: "salary",
//     country: 'us'
// },