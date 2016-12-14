import React, {Component} from "react"
import ReactDOM from "react-dom"
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'
import API_KEY from './constants/keys'

class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			'videos': [],
			'selectedVideo': null
		}
		this.youtube_search('')
	}

	youtube_search(search_term){
		var self = this
		YTSearch({key: API_KEY, term: search_term}, function(data){	
			self.setState({
				'videos': data,
				'selectedVideo': data[0]
			})
		})
	}

	update_selection(selectedVideo){
		this.setState({
			'selectedVideo': selectedVideo
		})
	}

	render(){
		return(
			<div>
				<SearchBar searchTermUpdateHandler={term => this.youtube_search(term)}/>
				<VideoDetail selectedVideo={this.state.selectedVideo}/>
				<VideoList videos={this.state.videos} update_selection={video => this.update_selection(video)}/>
			</div>
		)
	}

}

ReactDOM.render(<App />, document.querySelector(".container"))