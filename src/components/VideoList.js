import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
  const renderList = videos.map(v => {
	return <VideoItem
		key={v.id.videoId}
		video={v}

	/>;
  });
  return (
	  <div>{renderList}</div>
  );
};

export default VideoList;