import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios'

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            poster: '',
            title: '',
            released: '',
            genre: '',
            director: '',
            actors: ''
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    modalOpen = (imdbID) => {
        axios.get(
            'http://www.omdbapi.com/',
            {
                params: {
                    apikey: '98e9d12',
                    i: imdbID
                }
            }
        ).then((res) => {
            this.setState({
                poster: res.data.Poster,
                title: res.data.Title,
                released: res.data.Released,
                genre: res.data.Genre,
                director: res.data.Director,
                actors: res.data.Actors
            })
        })

        this.toggle()   
    }

    modal = () => {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader><div className="container-fluid">Movie Detail</div></ModalHeader>
                    <ModalBody>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-4">
                                    <img src={this.state.poster} alt={this.state.title} className="img-fluid"/>
                                </div>
                                <div className="col-8">
                                    <ul className="list-group">
                                        <li className="list-group-item"><h3>{this.state.title}</h3></li>
                                        <li className="list-group-item">Released : {this.state.released}</li>
                                        <li className="list-group-item">Genre : {this.state.genre}</li>                 
                                        <li className="list-group-item">Director : {this.state.director}</li>                 
                                        <li className="list-group-item">Actors : {this.state.actors}</li>                 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    renderList = () => {
        return this.props.data.map((item) => {
            return (
                <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={item.imdbID} onClick={() => {this.modalOpen(item.imdbID)}}>
                    <div className="card card-size mb-3 card-link">
                        <img src={item.Poster} className="card-image" alt={item.Title}/>
                        <div className="card-body">
                        <h5 className="card-title word-break">{item.Title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.Year}</h6>
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
                {this.modal()}
            </div>
        )
    }
}

export default MovieList