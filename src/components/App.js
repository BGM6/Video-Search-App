import React from 'react';
import {Component} from 'react';
import youtube from './apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends Component {
  state = {videos: []};

  onTermSearch = async (term) => {
	const response = await youtube.get('/search', {
	  params: {
		q: term,
	  }
	});
	console.log(response.data.items);
	this.setState({videos: response.data.items});
  };

  render() {
	return (
		<div className="ui container">
		  <SearchBar onSubmitProps={this.onTermSearch}/>
		  <VideoList videos={this.state.videos}/>
		</div>
	);
  }
}

export default App;