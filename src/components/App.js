import './main.css';
import React from 'react';
import {Component} from 'react';
import youtube from './apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import RenderIframe from './RenderIframe';
import Fotter from './Footer';
import Footer from './Footer';

class App extends Component {
	state = {videos: [], selectedVideo: null};

	async componentDidMount() {
		await this.onTermSearch('charizard');
	}

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

	onVideoSelect = (video) => {
		this.setState({selectedVideo: video});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmitProps={this.onTermSearch}/>
				<br/>
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<RenderIframe selectedVideo={this.state.selectedVideo}/>
						</div>
						<div className="five wide column">
							<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;