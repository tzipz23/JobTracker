import React from 'react'
import Result from './Result'
import './SearchResults.css'

class SearchResults extends React.Component {
    render(){
        return (
            <div className="searchResults">
                {this.props.results.map( r => <Result key={r.id} result={r} /> )}
            </div>
        )
    }
}

export default SearchResults