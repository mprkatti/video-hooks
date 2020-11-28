import React from 'react';

const VideoDetail = ({ video }) => {

  if (!video) {
    return (
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  const publishedDate = Math.round(Math.ceil(new Date() - new Date(video.snippet.publishTime)) / (1000 * 60 * 60 * 24 * 30 * 12));
  console.log(publishedDate);


  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header" >{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <p>Published <b> {publishedDate.toFixed(1)} </b>years ago.</p>
      </div>
    </div>
  );

}
export default VideoDetail;