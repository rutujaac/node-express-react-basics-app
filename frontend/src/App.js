import React, { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import MovieDetails from './components/MovieDetails';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3002/movies`
});

class App extends Component {

 

  constructor(props) {
    super(props);

    this.state = {
      rows : []
    };

    api.get('/').then(res => {
      console.log(res.data.movies)
      this.setState({
        rows : res.data.movies
      });
    });
    
  }

  searchMovie = async (event) =>{
    console.log("searching")
    await api.get('/?keyword='+event.target.value).then(res => {
      console.log(res.data.movies)
      this.setState({
        rows : res.data.filteredMovies
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <input placeholder="Enter movie" onChange={this.searchMovie.bind(this)} className="searchbar"/>
        {this.state.rows.map(row => <MovieDetails key={row.id} movie = {row}/>)}
      </div>  
    );
  } 
}

export default App;
