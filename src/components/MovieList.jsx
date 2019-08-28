import React, { Component } from 'react'
import MovieDetail from './MovieDetail'


class MovieList extends Component {

    renderList = () => {
      
        let hasil = this.props.data.map((item, index) => {
            return (
            <div className="col-md-3 col-sm-6" key={index}>
                <div className="card mb-3">
                    <img src={item.Poster} className="card-img-top" alt={item.Title}/>
                    <div className="card-body">
                    <h5 className="card-title">{item.Title}</h5>
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

        return hasil
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