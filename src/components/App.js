import React from 'react';
import {Component} from 'react';
import youtube from './apis/youtube';
import SearchBar from './SearchBar';

class App extends Component {
  state = {videos: []};

  render() {
	return (
		<div className="ui container">
		  <SearchBar onSubmit={this.state.videos}/>
		</div>
	);
  }
}

export default App;