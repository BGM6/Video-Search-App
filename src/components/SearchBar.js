import React from 'react';
import {Component} from 'react';

class SearchBar extends Component {
  state = {term: ''};

  onInputChange = (event) => {
	this.setState({term: event.target.value});
  };

  onFormSubmit = (event) => {
	event.preventDefault();
	this.props.onSubmit(this.state.term);
	this.setState({term: ''});
  };

  render() {
	return (
		<div>
		  <form className="ui form" onSubmit={this.onFormSubmit}>
			<div className="field">
			  <label htmlFor="search-bar">Video Search</label>
			  <input
				  type="text"
				  onChange={this.onInputChange}
			  />
			</div>
		  </form>
		</div>
	);
  }
}

export default SearchBar;