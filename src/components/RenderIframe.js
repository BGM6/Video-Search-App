import React from 'react';
import Loader from './Loader';

const RenderIframe = ({selectedVideo}) => {
  if(!selectedVideo) {
    return <Loader/>
  }
  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;


  return(
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} title="video player"/>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{selectedVideo.snippet.title}</h4>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </div>
  );
}

export default RenderIframe;