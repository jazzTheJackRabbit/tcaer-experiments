import React, {Component} from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {	
	var list = props.videos.map(function(video){
		return <VideoListItem key={video.etag} video={video} update_selection={props.update_selection}/>
	})
	return(
		<ul className="col-md-4 list-group">
			{list}
		</ul>
	)
}

export default VideoList