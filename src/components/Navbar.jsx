import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">    
                    <a className="navbar-brand" href="/">OMDb Movie Search</a>
                </div>
            </nav>
        )
    }
}

export default Navbar