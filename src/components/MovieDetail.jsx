import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios'

class ModalDetail extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      title: '',
      released: '',
      genre: '',
      director: '',
      actors: ''
    }
   
    // this.toggle = this.toggle.bind(this)
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))

  }
  
  getData = () => {
    axios.get(
      'http://www.omdbapi.com/',
      {
          params: {
              apikey: '98e9d12',
              i: this.props.imdbID
          }
      }

    ).then((res) => {
        console.log(res.data)
        this.setState({
          title: res.data.Title,
          released: res.data.Released,
          genre: res.data.Genre,
          director: res.data.Director,
          actors: res.data.Actors
        })

    }).catch((err) => {
        console.log(err.message)
    })
  }

  modalOpen = () => {
    this.getData()
    this.toggle()
  }

  render() {
    return (
      <div>
        <div className="card-link" style={{cursor: "pointer", color: "#007bff"}} onClick={this.modalOpen}>See Detail</div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Movie Details</ModalHeader>
          <ModalBody>
            <div className="container-fluid">
              <div className="row">
                  <div className="col-md-4">
                      <img src={this.props.poster} alt={this.state.title} className="img-fluid"/>
                  </div>
                 
                  <div className="col-md-8">
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
}

export default ModalDetail