import React, { Component } from 'react'
import MovieDetail from './MovieDetail'

class MovieList extends Component {
    renderList = () => {
        return this.props.data.map((item) => {
            return (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={item.imdbID}>
                    <div className="card card-size mb-3">
                        <img src={item.Poster} className="card-image" alt={item.Title}/>
                        <div className="card-body">
                        <h5 className="card-title word-break">{item.Title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.Year}</h6>
                        <MovieDetail      
                            imdbID = {item.imdbID}
                            poster = {item.Poster}
                        />
                        </div>
                    </div>
                </div>
            ) 
        })
    }
    
    render() {
        return (
            <div className="row">  
                {this.renderList()}
            </div>
        )
    }
}

export default MovieList