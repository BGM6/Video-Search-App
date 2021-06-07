import React from 'react';

const VideoItem = ({video}) => {

  return (
	  <div className="video-item item">
		<div className="content">
		  <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
		  <div className="header">{video.snippet.title}
		  </div>
		</div>
	  </div>
  );
};
export default VideoItem;