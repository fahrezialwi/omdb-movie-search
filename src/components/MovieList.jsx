import React, { Component } from 'react'
import MovieDetail from './MovieDetail'

class MovieList extends Component {

    onLoadClick = () => {
        
    }

    renderList = () => {
        if (this.props.data !== undefined) {
            return this.props.data.map((item, index) => {
                return (
                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
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
        } else {
            return (
                <div className="col-12">
                    No movie found
                </div>
            )
        }
    }
    
    render() {
        if (this.renderList().key === null) {
            return (
                <div>
                    {this.renderList()} 
                </div>
            )
        } else if (this.renderList().length !== 0){
            return (
                <div>
                    <div className="row">
                        {this.renderList()}    
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-4 mb-5">
                            <button type="button" className="btn btn-dark" onClick={this.onLoadClick}>Load More</button>
                        </div>
                    </div>   
                </div>
            )
        } else if (this.renderList().length === 0){
            return null
        }
    }
}

export default MovieList