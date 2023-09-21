import React, { Component } from 'react'
import './searchbar.css'

export default class SearchBar extends Component {
  state = {val:''}

  onInputChange = (evt) => {
    this.setState({val: evt.target.value})
  }

  onFormSubmit = (evt) => {
      evt.preventDefault();
      this.props.userSubmit(this.state.val) ;
  }


  render() {
    return (
      <div>
            <form className='flexContainer' onSubmit={this.onFormSubmit}>
                <label htmlFor='search'><h2>Image Search: </h2></label>
                <input 
                  className='inputStyle' 
                  type="text" 
                  value={this.state.val}
                  onChange={this.onInputChange}
                />
            </form>
      </div>
    )
  }
}
