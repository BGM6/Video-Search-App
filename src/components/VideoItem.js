import React from 'react';

const VideoItem = ({video}) => {

  return (
	  <div>
		<h3>{video.snippet.title}</h3>
		<img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
	  </div>
  );
};
export default VideoItem;