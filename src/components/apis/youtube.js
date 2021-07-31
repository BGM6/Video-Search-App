import axios from 'axios';
const apiKey = 'AIzaSyC9q-bpR_1QezX5kBy8lPmmBLqmQW_4cZI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
	part: 'snippet',
	type: 'video',
	maxResults: 8,
	key: apiKey
  }
})
