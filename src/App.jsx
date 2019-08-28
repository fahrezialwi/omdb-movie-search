import React, { Component } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    onSearchSubmit = (keyword) => {
        axios.get(
            'http://www.omdbapi.com/',
            {
                params: {
                    apikey: '98e9d12',
                    s: keyword
                }
            }

        ).then((res) => {
            // console.log(res)
            this.setState({movies: res.data.Search})

        }).catch((err) => {
            console.log(err.message)
        })
    }

    render(){
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <SearchBar fun = {this.onSearchSubmit} />
                    <MovieList data = {this.state.movies}/>
                </div>
            </div>


        )
    }
}

export default App