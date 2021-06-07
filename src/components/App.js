import React from 'react';
import {Component} from 'react';
import youtube from './apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import RenderIframe from './RenderIframe';

class App extends Component {
  state = {videos: [], selectedVideo: null};

  onTermSearch = async (term) => {
	const response = await youtube.get('/search', {
	  params: {
		q: term,
	  }
	});
	this.setState({
	  videos: response.data.items,
	  selectedVideo: response.data.items[0]
	});
  };

  render() {
	return (
		<div className="ui container">
		  <SearchBar onSubmitProps={this.onTermSearch}/>
		  <RenderIframe selectedVideo={this.state.selectedVideo}/>
		  <VideoList videos={this.state.videos}/>
		</div>
	);
  }
}

export default App;