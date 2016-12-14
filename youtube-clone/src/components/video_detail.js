import React from 'react'

const VideoDetail = (props) =>{		
	let videoId = "Z9LUpA2fzU4"
	if(props.selectedVideo){
		videoId = props.selectedVideo.id.videoId
	}

	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen="true"></iframe>
			</div>
			<div className="details">
				<div>{props.selectedVideo?props.selectedVideo.snippet.title:"Loading..."}</div>
				<div>{props.selectedVideo?props.selectedVideo.snippet.description:"Loading..."}</div>
			</div>
		</div>
	)
}

export default VideoDetail