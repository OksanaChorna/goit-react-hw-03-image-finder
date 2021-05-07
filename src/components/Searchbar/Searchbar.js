import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state.searchQuery);

    // this.setState({ searchQuery: '' });
  };

  handleChange = event => {
    console.log(event.currentTarget.value);
    this.setState({ searchQuery: event.currentTarget.value });
  };

  render() {
    // const { name } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
