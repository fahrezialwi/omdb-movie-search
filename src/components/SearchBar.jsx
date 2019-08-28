import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault()

        this.props.fun(this.state.keyword)
    }

    onChangeText = (e) => {
        this.setState({keyword: e.target.value})
    }

    render() {
        return (   
            <div className="row mt-3 justify-content-center">
                <div className="col-8">
                    <form 
                    className="form-group mt-5 mb-5" 
                    onSubmit={this.onSubmitForm}> 
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Type movie title" 
                            id="search-input" 
                            onChange={this.onChangeText}
                        />
                    </form>
                </div>
            </div> 
        )
    }
}

export default SearchBar