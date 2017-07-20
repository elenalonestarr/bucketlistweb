import React, { Component } from "react";

const VideoDetail = ({video}) => {
	if (!video) {
		return (<div>Loading...</div>);
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>

			<div className="details">
				<div><h4>TITLE:</h4>{video.snippet.title}</div>
				<div><h5>DESCRIPTION:</h5>{video.snippet.description}</div>
			</div>
			
		</div>



		
	)
};

export default VideoDetail;