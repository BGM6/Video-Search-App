import axios from 'axios';
const apiKey = 'AIzaSyDWIJ3t-pcuKX-DrUBL7S-oUr6WnFCiaNw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
	part: 'snippet',
	type: 'video',
	maxResults: 8,
	key: apiKey
  }
})
