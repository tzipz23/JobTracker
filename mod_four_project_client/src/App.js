import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Navbar from './Navbar'
import LoginContainer from './Login/LoginContainer'
import Home from './Home/Home'
import UserInfoContainer from './Account/UserInfoContainer'
import Search from './Search/SearchContainer'
import Research from './Research/ResearchDetailContainer'

class App extends React.Component {

  constructor() {
    super()
    this.state ={
      currentUser: null,
      tags: []
    }
  }
  
  setUser = (user) => {
    this.setState({currentUser: user})
  }

  removeUser = () => {
    this.setState({currentUser: null})
  }

  componentDidMount(){
    this.getCurrentUser()
    this.getTags()
  }

  getCurrentUser = () => {
    // check if token is valid and set state 
    fetch(`http://localhost:3001/auth`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    .then(r => r.json() )
    .then(data => {
      if (data.user_id) {
        this.setState({currentUser: data})
      }
      // console.log(data);
    })
  }

  getTags = () => {
    fetch("http://localhost:3001/tags", {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
          'Accept': "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  })
  .then(r => r.json())
  .then(tag_array => {
      this.setState({tags: tag_array})
      console.log(tag_array)
    })
  }

  addTag = (data) => {
    let currentTags = [...this.state.tags, data.tag]
    this.setState({tags: currentTags})
  }

  handleClickDelete = (tag) => {
    console.log("delete")
    console.log(tag)
    const filteredTags = this.state.tags.filter(t => t.id !== tag.id )
   //another way
    // const filteredTags = this.state.tags.slice();
    //     if (filteredTags.indexOf(tag) > -1) {
    //         filteredTags.splice(filteredTags.indexOf(tag), 1);
    //         this.setState({tags: filteredTags})
    //     }   

    fetch(`http://localhost:3001/tags/${tag.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
    .then(r => r.json())
    .then(data => {
        this.setState({tags: filteredTags})
        // console.log(data)
    })
  }


  render() {
  return (
    <div className="App">
      <Navbar isLogged={!!this.state.currentUser} removeUser={this.removeUser} firstName={this.state.currentUser}/>
      {
        this.state.currentUser ?
        < Switch >

          <Route exact path='/' render={ () => <Home/>} />
            
          <Route exact path='/user' render={ () => <UserInfoContainer 
                                    tags={this.state.tags} 
                                    handleClickDelete={this.handleClickDelete}
                                    addTag={this.addTag}
                                    />} />
               
          <Route exact path='/search' render={ () => <Search tags={this.state.tags}/>} />
        
          <Route path='/research' render={ () =>   < Research tags={this.state.tags} /> } />
          
          {/* <Route exact path='/research/:id' render={ () =>   < JobListingShowPage /> } /> */}
            
          <Route path='/' render={() =>      <div>
                                        404: Page not found 
                                            </div> } />
       
        </ Switch >
        // add all the components that we want to see when 
        // logged in
        :
      <LoginContainer setUser={this.setUser} />
      }
    </div>
  );
    }
}

export default App;
